from playwright.sync_api import sync_playwright

def run_cuj(page):
    # Navigate to Student Pages
    page.goto("http://localhost:5173/pre-departure")
    page.wait_for_timeout(500)
    page.screenshot(path="/home/jules/verification/screenshots/student1_predeparture.png")

    page.goto("http://localhost:5173/marketplace")
    page.wait_for_timeout(500)
    page.screenshot(path="/home/jules/verification/screenshots/student2_marketplace.png")

    # Navigate to Admin Pages
    page.goto("http://localhost:5173/admin/dashboard")
    page.wait_for_timeout(500)
    page.screenshot(path="/home/jules/verification/screenshots/admin1_dashboard.png")

    page.goto("http://localhost:5173/admin/students")
    page.wait_for_timeout(500)
    page.screenshot(path="/home/jules/verification/screenshots/admin2_students.png")

    page.goto("http://localhost:5173/admin/documents")
    page.wait_for_timeout(500)
    page.screenshot(path="/home/jules/verification/screenshots/admin3_docs.png")

    page.goto("http://localhost:5173/admin/applications")
    page.wait_for_timeout(500)
    page.screenshot(path="/home/jules/verification/screenshots/admin4_content.png")

    page.goto("http://localhost:5173/admin/manual-entry")
    page.wait_for_timeout(500)
    page.screenshot(path="/home/jules/verification/screenshots/admin5_manual.png")

    page.goto("http://localhost:5173/admin/finance")
    page.wait_for_timeout(500)
    page.screenshot(path="/home/jules/verification/screenshots/admin6_finance.png")

    page.goto("http://localhost:5173/admin/marketing")
    page.wait_for_timeout(500)
    page.screenshot(path="/home/jules/verification/screenshots/admin7_marketing.png")

    page.goto("http://localhost:5173/admin/analytics")
    page.wait_for_timeout(500)
    page.screenshot(path="/home/jules/verification/screenshots/admin8_analytics.png")

    page.goto("http://localhost:5173/admin/counselors")
    page.wait_for_timeout(500)
    page.screenshot(path="/home/jules/verification/screenshots/admin9_counselors.png")

    page.goto("http://localhost:5173/admin/pipeline")
    page.wait_for_timeout(500)
    page.screenshot(path="/home/jules/verification/screenshots/admin10_pipeline.png")

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
