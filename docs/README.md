# My Adventure Support Website

This directory contains the static website files for My Adventure's support pages, privacy policy, and terms of service - required for Apple App Store submission.

## 📱 Current Version: 3.3.0

### What's New in v3.3.0 (December 15, 2025)

**Social Media Features**
- 👤 User profiles with bio, location, website, and custom banners
- 🌍 Share stories publicly with the YourAdventure community
- ❤️ Like and comment on stories from other creators
- 🔄 Fork (remix) public stories to create your own versions
- 👥 Follow your favorite storytellers
- 🔔 Real-time notifications for likes, comments, and new followers

**Documentation Updates**
- Enhanced privacy policy with social data collection details
- Expanded terms of service with social features guidelines
- Added content licensing for forked stories
- New FAQ section for social features
- Updated all dates to December 5, 2025

### Version History
- **v3.3.0** (Dec 15, 2025) - TikTok-style feed, text-to-speech, PDF export, dark mode
- **v2.1.0** (Dec 5, 2025) - Social features launch
- **v2.0.0** (Dec 2, 2025) - Initial release with AI story generation

## 📁 Structure

```
docs/
├── index.html          # Landing page with app features
├── support.html        # Help center with FAQ
├── privacy.html        # Privacy Policy (required by Apple)
├── terms.html          # Terms of Service
├── refunds.html        # Refund Policy
├── css/
│   └── styles.css     # All styles
├── js/
│   └── main.js        # Interactive features
└── README.md          # This file
```

## 🚀 Deployment to GitHub Pages

### Step 1: Enable GitHub Pages

1. Go to your GitHub repository settings
2. Navigate to **Pages** section (left sidebar)
3. Under **Source**, select:
   - Branch: `main`
   - Folder: `/docs`
4. Click **Save**

### Step 2: Wait for Deployment

- GitHub will automatically deploy your site
- Usually takes 1-2 minutes
- Your site will be live at: `https://issathanh.github.io/gym-app-3.0.1/`

### Step 3: Verify Deployment

Visit these URLs to confirm everything works:

- **Landing Page**: `https://issathanh.github.io/gym-app-3.0.1/`
- **Support**: `https://issathanh.github.io/gym-app-3.0.1/support.html`
- **Privacy Policy**: `https://issathanh.github.io/gym-app-3.0.1/privacy.html`
- **Terms**: `https://issathanh.github.io/gym-app-3.0.1/terms.html`
- **Refunds**: `https://issathanh.github.io/gym-app-3.0.1/refunds.html`

## 📝 For Apple App Store Submission

Use these URLs in your App Store Connect submission:

- **Support URL**: `https://issathanh.github.io/gym-app-3.0.1/support.html`
- **Privacy Policy URL**: `https://issathanh.github.io/gym-app-3.0.1/privacy.html`

## 🎨 Customization

### Update Email Addresses

Currently set to `youradventuresp@gmail.com`.

Search and replace across all files:
```bash
# In docs/ directory
find . -type f -name "*.html" -exec sed -i 's/support@yourstory.app/youradventuresp@gmail.com/g' {} +
```

Or manually update in:
- All HTML files (support.html, privacy.html, terms.html, refunds.html)

### Add Your Logo

1. Add your logo image to `docs/images/logo.png`
2. Update the logo reference in all HTML files:
   ```html
   <div class="logo">
       <img src="images/logo.png" alt="YourAdventure Logo">
       <span>YourAdventure</span>
   </div>
   ```

### Update Colors/Branding

Edit `docs/css/styles.css` to change color scheme:

```css
:root {
    --primary: #007AFF;        /* Main brand color */
    --secondary: #5856D6;      /* Secondary color */
    --background: #F5F5F7;     /* Page background */
    --surface: #FFFFFF;        /* Card/surface color */
}
```

## 🔧 Local Testing

To test locally before deploying:

1. **Using Python**:
   ```bash
   cd docs
   python -m http.server 8000
   # Visit http://localhost:8000
   ```

2. **Using Node.js**:
   ```bash
   npx serve docs
   # Visit http://localhost:3000
   ```

3. **Just open files**:
   - Open `docs/index.html` in your browser
   - Note: Some features may not work without a server

## ✅ What's Included

### Landing Page (index.html)
- ✅ Hero section with app description
- ✅ Feature showcase
- ✅ Social features section (NEW in v2.1.0)
- ✅ How it works section
- ✅ Pricing information
- ✅ Call-to-action buttons

### Support Page (support.html)
- ✅ Contact information
- ✅ 30+ FAQ items organized by category
- ✅ Interactive accordion (click to expand)
- ✅ Getting Started guide
- ✅ Credits & Purchases info
- ✅ Social Features FAQ (NEW in v2.1.0)
- ✅ Troubleshooting section

### Privacy Policy (privacy.html)
- ✅ GDPR compliant
- ✅ CCPA compliant
- ✅ Lists all third-party services
- ✅ Data collection details (including social media data - NEW v2.1.0)
- ✅ Public information section (NEW v2.1.0)
- ✅ Data retention policy (NEW v2.1.0)
- ✅ User rights explained
- ✅ Contact information

### Terms of Service (terms.html)
- ✅ Account requirements
- ✅ User profiles and social features (NEW in v2.1.0)
- ✅ Social interactions guidelines (NEW in v2.1.0)
- ✅ Public stories and content licensing (NEW in v2.1.0)
- ✅ Credit system explained
- ✅ Acceptable use policy
- ✅ Content policy
- ✅ Intellectual property rights
- ✅ Limitation of liability
- ✅ Refund policy reference

### Refund Policy (refunds.html)
- ✅ Apple refund process
- ✅ Automatic credit refunds
- ✅ Content violation policy (optimized in v2.1.0)
- ✅ Technical issue handling
- ✅ Clear refund eligibility

### Styling (css/styles.css)
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Modern, clean aesthetics
- ✅ iOS-inspired design language
- ✅ Smooth animations
- ✅ Accessible color contrast

### Interactivity (js/main.js)
- ✅ FAQ accordion functionality
- ✅ Smooth scrolling
- ✅ Active page indicator
- ✅ Scroll animations
- ✅ External link indicators

## 🔄 Making Updates

After editing files:

```bash
git add docs/
git commit -m "Update support website"
git push origin main
```

GitHub Pages will automatically redeploy within 1-2 minutes.

## 🌐 Custom Domain (Optional)

If you want to use a custom domain (e.g., `support.youradventure.app`):

1. Add a `CNAME` file in `docs/` with your domain:
   ```
   support.youradventure.app
   ```

2. Configure DNS with your domain provider:
   - Add a CNAME record pointing to `issathanh.github.io`
   - Or add A records pointing to GitHub Pages IPs

3. Enable custom domain in GitHub Pages settings

## 📧 Email Setup

The site references these email addresses (update before launch):

- `youradventuresp@gmail.com` - Customer support
- `youradventuresp@gmail.com` - Privacy inquiries  
- `youradventuresp@gmail.com` - Legal/terms inquiries

Make sure these are set up and monitored!

## ✨ Features

- **Fully Responsive** - Works on all devices
- **SEO Optimized** - Meta tags and semantic HTML
- **Fast Loading** - Static files, no external dependencies
- **Accessible** - WCAG compliant colors and structure
- **Interactive** - FAQ accordions, smooth scrolling
- **Professional** - Clean, modern design

## 📱 Apple App Store Requirements

This website satisfies Apple's requirements:

- ✅ Support URL (publicly accessible)
- ✅ Privacy Policy URL (no login required)
- ✅ Contact information provided
- ✅ Refund policy explained
- ✅ Terms of service included

## 🐛 Troubleshooting

**Site not loading?**
- Wait 2-3 minutes after enabling GitHub Pages
- Check GitHub Actions for deployment status
- Verify `/docs` folder is selected in settings

**Images not showing?**
- Use relative paths (`images/logo.png` not `/images/logo.png`)
- Verify files are in the correct directories

**Styles not applying?**
- Check browser console for errors
- Verify CSS file path is correct
- Clear browser cache

## 📞 Support

For questions about this website:
- GitHub Issues: https://github.com/issathanh/gym-app-3.0.1/issues
- Email: youradventuresp@gmail.com

## 🚀 v2.1.0 Deployment Checklist

Before deploying v2.1.0 to production:

- [x] Update privacy.html with social data collection
- [x] Update terms.html with social features terms
- [x] Update all dates to December 5, 2025
- [x] Add social features section to index.html
- [x] Add social FAQ to support.html
- [x] Update refunds.html with v2.1.0 notes
- [x] Update README.md with version history
- [ ] Push to GitHub (git push origin main)
- [ ] Verify GitHub Pages deployment
- [ ] Test all URLs
- [ ] Submit to App Store with updated URLs

---

**Last Updated**: December 5, 2025  
**Version**: 2.1.0  
**Status**: ✅ Ready for deployment
