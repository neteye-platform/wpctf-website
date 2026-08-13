import { test, expect } from '@playwright/test'

test.describe('Home Page', () => {
  test('should load and display the page title', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/CTF.*Capture the Flag.*2026/)
  })

  test('should display the hero heading', async ({ page }) => {
    await page.goto('/')
    const heroHeading = page.locator('#hero-section h1')
    await expect(heroHeading).toBeVisible()
    await expect(heroHeading).toHaveText('WP CTF 2026')
  })

  test('should display main sections', async ({ page }) => {
    await page.goto('/')

    // Hero section
    await expect(page.locator('#hero-section')).toBeVisible()

    // Prizes section
    await expect(page.locator('#prizes-section')).toBeVisible()

    // Rules section
    await expect(page.locator('#rules')).toBeVisible()

    // Gallery section
    await expect(page.locator('#gallery-section')).toBeVisible()

    // Registration section
    await expect(page.locator('#registration')).toBeVisible()
  })

  test('should display the footer', async ({ page }) => {
    await page.goto('/')
    const footer = page.locator('#footer-section')
    await expect(footer).toBeVisible()
  })

  test('should display the registration section with heading', async ({ page }) => {
    await page.goto('/')
    const registrationHeading = page.locator('#registration h2')
    await expect(registrationHeading).toHaveText('Registration')
  })

  test('should contain mobile overflow while keeping the rules artwork scrollable', async ({
    page
  }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')

    const layout = await page.evaluate(() => {
      const artwork = document.querySelector<HTMLElement>('#rules pre')
      if (!artwork) return null

      return {
        documentClientWidth: document.documentElement.clientWidth,
        documentScrollWidth: document.documentElement.scrollWidth,
        artworkClientWidth: artwork.clientWidth,
        artworkScrollWidth: artwork.scrollWidth,
        artworkOverflowX: getComputedStyle(artwork).overflowX
      }
    })

    expect(layout).not.toBeNull()
    expect(layout?.documentScrollWidth).toBe(layout?.documentClientWidth)
    expect(layout?.artworkScrollWidth).toBeGreaterThan(layout?.artworkClientWidth ?? 0)
    expect(layout?.artworkOverflowX).toBe('auto')
  })
})

test.describe('Sponsors Page', () => {
  test('should load the sponsors page', async ({ page }) => {
    await page.goto('/sponsors')
    const sponsorsHeading = page.locator('#sponsors-section h1')
    await expect(sponsorsHeading).toBeVisible()
    await expect(sponsorsHeading).toHaveText('Sponsors')
  })

  test('should allow vertical wheel scrolling while the cookie banner is visible', async ({
    page
  }) => {
    await page.goto('/sponsors')
    await expect(page.locator('#cookie-container')).toBeVisible()

    const layout = await page.evaluate(() => ({
      documentHeight: document.documentElement.scrollHeight,
      viewportHeight: window.innerHeight,
      bodyOverflowY: getComputedStyle(document.body).overflowY
    }))

    expect(layout.documentHeight).toBeGreaterThan(layout.viewportHeight)
    expect(layout.bodyOverflowY).not.toBe('hidden')

    await page.mouse.wheel(0, 600)

    await expect.poll(() => page.evaluate(() => window.scrollY)).toBeGreaterThan(0)
  })
})

test.describe('Navigation', () => {
  test('should redirect unknown routes to home', async ({ page }) => {
    await page.goto('/non-existent-page')
    // Should be redirected to home and hero section should be visible
    await expect(page.locator('#hero-section')).toBeVisible()
  })
})
