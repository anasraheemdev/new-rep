from playwright.sync_api import sync_playwright

def run_cuj(page):
    page.goto("http://localhost:5173/login")
    page.wait_for_timeout(500)

    # Test Admin Login Route
    page.get_by_role("button", name="Sign In as Admin").click()
    page.wait_for_timeout(500)
    page.screenshot(path="/home/jules/verification/screenshots/final1_admin_dash.png")

    # Click around a bit
    page.get_by_role("button", name="View All").click()
    page.wait_for_timeout(500)
    page.screenshot(path="/home/jules/verification/screenshots/final2_admin_pipeline.png")

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
