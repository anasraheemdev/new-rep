from playwright.sync_api import sync_playwright

def run_cuj(page):
    # Navigate to Compare Unis
    page.goto("http://localhost:5173/compare")
    page.wait_for_timeout(500)
    page.screenshot(path="/home/jules/verification/screenshots/new1_compare.png")

    # Navigate to Visa Prep
    page.goto("http://localhost:5173/visa-interview")
    page.wait_for_timeout(500)
    page.screenshot(path="/home/jules/verification/screenshots/new2_visa_prep.png")

    # Navigate to Finance
    page.goto("http://localhost:5173/finance")
    page.wait_for_timeout(500)
    page.screenshot(path="/home/jules/verification/screenshots/new3_finance.png")

    page.wait_for_timeout(1000)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            viewport={'width': 1280, 'height': 800},
            record_video_dir="/home/jules/verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
