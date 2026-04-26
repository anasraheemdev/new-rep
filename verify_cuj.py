from playwright.sync_api import sync_playwright

def run_cuj(page):
    # Landing Page
    page.goto("http://localhost:5173")
    page.wait_for_timeout(500)
    page.screenshot(path="/home/jules/verification/screenshots/1_landing.png")

    # Go to signup
    page.get_by_role("link", name="Sign Up").first.click()
    page.wait_for_timeout(500)
    page.screenshot(path="/home/jules/verification/screenshots/2_signup.png")

    # Go to login
    page.get_by_role("link", name="Log in here").click()
    page.wait_for_timeout(500)
    page.screenshot(path="/home/jules/verification/screenshots/3_login.png")

    # Sign In
    page.get_by_role("button", name="Sign In", exact=True).click()
    page.wait_for_timeout(1000)
    page.screenshot(path="/home/jules/verification/screenshots/4_dashboard.png")

    # Navigate to Roadmap
    page.goto("http://localhost:5173/roadmap")
    page.wait_for_timeout(500)
    page.screenshot(path="/home/jules/verification/screenshots/5_roadmap.png")

    # Navigate to Universities
    page.goto("http://localhost:5173/universities")
    page.wait_for_timeout(500)
    page.screenshot(path="/home/jules/verification/screenshots/6_universities.png")

    # Navigate to University Details
    page.get_by_role("link", name="View Programs & Apply").first.click()
    page.wait_for_timeout(500)
    page.screenshot(path="/home/jules/verification/screenshots/7_uni_details.png")

    # Navigate to Scholarships
    page.goto("http://localhost:5173/scholarships")
    page.wait_for_timeout(500)
    page.screenshot(path="/home/jules/verification/screenshots/8_scholarships.png")

    # Navigate to Application Steps
    page.goto("http://localhost:5173/application-steps")
    page.wait_for_timeout(500)
    page.screenshot(path="/home/jules/verification/screenshots/9_app_steps.png")

    # Navigate to Documents
    page.goto("http://localhost:5173/documents")
    page.wait_for_timeout(500)
    page.screenshot(path="/home/jules/verification/screenshots/10_docs.png")

    # Navigate to Visa Guide Italy
    page.goto("http://localhost:5173/visa-italy")
    page.wait_for_timeout(500)
    page.screenshot(path="/home/jules/verification/screenshots/11_visa.png")

    # Navigate to Assistant
    page.goto("http://localhost:5173/assistant")
    page.wait_for_timeout(500)
    page.screenshot(path="/home/jules/verification/screenshots/12_assistant.png")

    # Navigate to Settings
    page.goto("http://localhost:5173/settings")
    page.wait_for_timeout(500)
    page.screenshot(path="/home/jules/verification/screenshots/13_settings.png")

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