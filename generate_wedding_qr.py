import os
import math
import qrcode
from qrcode.image.styledpil import StyledPilImage
from qrcode.image.styles.moduledrawers import RoundedModuleDrawer
from qrcode.image.styles.colormasks import SolidFillColorMask
from PIL import Image, ImageDraw, ImageFont

TARGET_URL = "https://jatinkalwar.in/redirecttoWeddingVenue"

def create_wedding_rings_badge(size=150):
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Outer gold halo / glow
    draw.ellipse([2, 2, size-3, size-3], fill=(255, 253, 248, 255), outline=(205, 168, 92, 255), width=4)
    draw.ellipse([7, 7, size-8, size-8], outline=(238, 218, 165, 255), width=2)
    
    # Ring coordinates
    cx, cy = size // 2, size // 2
    r_w = 48
    r_h = 48
    
    r1_box = [cx - 36, cy - 20, cx - 36 + r_w, cy - 20 + r_h]
    r2_box = [cx - 12, cy - 20, cx - 12 + r_w, cy - 20 + r_h]
    
    gold_dark = (160, 120, 40, 255)
    gold_mid = (212, 175, 55, 255)
    gold_bright = (250, 235, 180, 255)
    
    # Draw right ring
    draw.ellipse(r2_box, outline=gold_dark, width=6)
    draw.ellipse(r2_box, outline=gold_mid, width=4)
    draw.ellipse(r2_box, outline=gold_bright, width=2)
    
    # Draw left ring
    draw.ellipse(r1_box, outline=gold_dark, width=6)
    draw.ellipse(r1_box, outline=gold_mid, width=4)
    draw.ellipse(r1_box, outline=gold_bright, width=2)
    
    # Sparkling Diamond on top of left ring
    d_x = cx - 12
    d_y = cy - 23
    diamond = [
        (d_x, d_y - 14),
        (d_x + 11, d_y - 4),
        (d_x, d_y + 6),
        (d_x - 11, d_y - 4)
    ]
    draw.polygon(diamond, fill=(240, 248, 255, 255), outline=gold_dark)
    draw.line([(d_x, d_y - 14), (d_x, d_y + 6)], fill=(190, 220, 250, 255), width=1)
    draw.line([(d_x - 11, d_y - 4), (d_x + 11, d_y - 4)], fill=(190, 220, 250, 255), width=1)
    
    # Intertwine right ring over left
    draw.arc(r2_box, start=130, end=230, fill=gold_mid, width=4)
    draw.arc(r2_box, start=140, end=220, fill=gold_bright, width=2)

    return img

def draw_corner_ornament(draw, x, y, flip_x=False, flip_y=False, scale=1.0, color=(197, 160, 89)):
    # Draw floral/wedding corner flourishes
    sx = -scale if flip_x else scale
    sy = -scale if flip_y else scale
    
    points_curve1 = [
        (0, 0), (25, 0), (50, 6), (75, 20), (90, 45), (96, 75), (96, 96)
    ]
    
    def transform(pt):
        px, py = pt
        return (x + px * sx, y + py * sy)
    
    t_pts = [transform(p) for p in points_curve1]
    for i in range(len(t_pts) - 1):
        draw.line([t_pts[i], t_pts[i+1]], fill=color, width=max(1, int(2 * scale)))
        
    # Small corner flower/heart accent
    c_pt = transform((24, 24))
    draw.ellipse([c_pt[0]-3*scale, c_pt[1]-3*scale, c_pt[0]+3*scale, c_pt[1]+3*scale], fill=color)

def generate_base_qr():
    qr = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=18,
        border=3,
    )
    qr.add_data(TARGET_URL)
    qr.make(fit=True)
    
    # High-contrast deep royal bronze-gold modules for instant 100% scan reliability
    # Module color: deep espresso bronze gold (RGB 45, 30, 20)
    # Background: soft warm cream (RGB 253, 251, 247)
    img_qr = qr.make_image(
        image_factory=StyledPilImage,
        module_drawer=RoundedModuleDrawer(),
        color_mask=SolidFillColorMask(
            front_color=(46, 31, 21),
            back_color=(253, 251, 247)
        )
    ).convert("RGBA")
    
    # Add center wedding rings badge
    badge = create_wedding_rings_badge(size=140)
    bw, bh = badge.size
    qw, qh = img_qr.size
    badge_pos = ((qw - bw) // 2, (qh - bh) // 2)
    img_qr.paste(badge, badge_pos, badge)
    
    return img_qr

def generate_standalone_qr(qr_img, output_path):
    w, h = qr_img.size
    pad = 80
    canvas_w = w + pad * 2
    canvas_h = h + pad * 2
    
    canvas = Image.new("RGBA", (canvas_w, canvas_h), (253, 251, 247, 255))
    draw = ImageDraw.Draw(canvas)
    
    # Gold decorative double border
    gold_main = (197, 160, 89, 255)
    gold_subtle = (228, 205, 150, 255)
    
    # Outer border
    draw.rectangle([20, 20, canvas_w - 20, canvas_h - 20], outline=gold_main, width=3)
    # Inner border
    draw.rectangle([28, 28, canvas_w - 28, canvas_h - 28], outline=gold_subtle, width=1)
    
    # Corner ornaments
    draw_corner_ornament(draw, 35, 35, flip_x=False, flip_y=False, scale=0.7, color=gold_main)
    draw_corner_ornament(draw, canvas_w - 35, 35, flip_x=True, flip_y=False, scale=0.7, color=gold_main)
    draw_corner_ornament(draw, 35, canvas_h - 35, flip_x=False, flip_y=True, scale=0.7, color=gold_main)
    draw_corner_ornament(draw, canvas_w - 35, canvas_h - 35, flip_x=True, flip_y=True, scale=0.7, color=gold_main)
    
    # Paste QR in center
    canvas.paste(qr_img, (pad, pad), qr_img)
    
    canvas.save(output_path, "PNG", dpi=(300, 300))
    print(f"Saved standalone QR to {output_path}")

def generate_invitation_card(qr_img, output_path):
    card_w = 1200
    card_h = 1600
    
    card = Image.new("RGBA", (card_w, card_h), (254, 252, 248, 255))
    draw = ImageDraw.Draw(card)
    
    gold_main = (189, 148, 71, 255)
    gold_soft = (225, 198, 140, 255)
    charcoal = (50, 38, 28, 255)
    charcoal_light = (115, 95, 78, 255)
    
    # Double ornate border
    draw.rectangle([40, 40, card_w - 40, card_h - 40], outline=gold_main, width=3)
    draw.rectangle([52, 52, card_w - 52, card_h - 52], outline=gold_soft, width=1)
    
    # Corner flourishes
    draw_corner_ornament(draw, 65, 65, flip_x=False, flip_y=False, scale=1.3, color=gold_main)
    draw_corner_ornament(draw, card_w - 65, 65, flip_x=True, flip_y=False, scale=1.3, color=gold_main)
    draw_corner_ornament(draw, 65, card_h - 65, flip_x=False, flip_y=True, scale=1.3, color=gold_main)
    draw_corner_ornament(draw, card_w - 65, card_h - 65, flip_x=True, flip_y=True, scale=1.3, color=gold_main)
    
    # Fonts
    font_header = ImageFont.truetype("C:/Windows/Fonts/Gabriola.ttf", 64)
    font_title = ImageFont.truetype("C:/Windows/Fonts/georgiab.ttf", 46)
    font_sub = ImageFont.truetype("C:/Windows/Fonts/georgia.ttf", 26)
    font_instruct = ImageFont.truetype("C:/Windows/Fonts/georgiab.ttf", 28)
    font_url = ImageFont.truetype("C:/Windows/Fonts/georgia.ttf", 22)
    font_footer = ImageFont.truetype("C:/Windows/Fonts/Gabriola.ttf", 48)

    # Header section
    draw.text((card_w // 2, 130), "Wedding Celebration", fill=gold_main, font=font_header, anchor="mm")
    
    # Divider flourish
    def draw_divider(y_pos):
        cx = card_w // 2
        draw.line([(cx - 180, y_pos), (cx - 30, y_pos)], fill=gold_soft, width=1)
        draw.line([(cx + 30, y_pos), (cx + 180, y_pos)], fill=gold_soft, width=1)
        # Small diamond in center
        draw.polygon([(cx, y_pos - 6), (cx + 6, y_pos), (cx, y_pos + 6), (cx - 6, y_pos)], fill=gold_main)

    draw_divider(180)
    
    draw.text((card_w // 2, 230), "VENUE LOCATION", fill=charcoal, font=font_title, anchor="mm")
    draw.text((card_w // 2, 285), "STAR PALACE", fill=gold_main, font=font_sub, anchor="mm")
    
    # QR Code container box with gentle border
    qw, qh = qr_img.size
    target_qw = 680
    target_qh = int(qh * (target_qw / qw))
    resized_qr = qr_img.resize((target_qw, target_qh), Image.Resampling.LANCZOS)
    
    qr_x = (card_w - target_qw) // 2
    qr_y = 350
    
    # White card backdrop for QR
    box_pad = 25
    draw.rectangle(
        [qr_x - box_pad, qr_y - box_pad, qr_x + target_qw + box_pad, qr_y + target_qh + box_pad],
        fill=(255, 255, 255, 255),
        outline=gold_soft,
        width=2
    )
    
    card.paste(resized_qr, (qr_x, qr_y), resized_qr)
    
    # Bottom text
    inst_y = qr_y + target_qh + box_pad + 60
    draw.text((card_w // 2, inst_y), "Scan with your phone camera", fill=charcoal, font=font_instruct, anchor="mm")
    draw.text((card_w // 2, inst_y + 40), "for directions on Google Maps", fill=charcoal_light, font=font_sub, anchor="mm")
    
    draw_divider(inst_y + 90)
    
    draw.text((card_w // 2, inst_y + 130), "jatinkalwar.in/redirecttoWeddingVenue", fill=gold_main, font=font_url, anchor="mm")
    
    draw.text((card_w // 2, card_h - 110), "We look forward to celebrating with you!", fill=gold_main, font=font_footer, anchor="mm")
    
    card.save(output_path, "PNG", dpi=(300, 300))
    print(f"Saved invitation card to {output_path}")

if __name__ == "__main__":
    os.makedirs("public/qr", exist_ok=True)
    base_qr = generate_base_qr()
    
    out_qr = "public/qr/wedding_qr_code.png"
    out_card = "public/qr/wedding_invitation_card.png"
    
    generate_standalone_qr(base_qr, out_qr)
    generate_invitation_card(base_qr, out_card)
    
    # Also save to root of project for easy user access
    generate_standalone_qr(base_qr, "wedding_qr_code.png")
    generate_invitation_card(base_qr, "wedding_invitation_card.png")
    print("Done generating all wedding QR assets!")
