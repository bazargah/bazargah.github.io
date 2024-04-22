import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://bazargah.github.io",
  integrations: [
    starlight({
      title: "مستندات بازارگاه",
      social: {
        telegram: "https://t.me/bazargah_shop_bot",
        instagram: "https://www.instagram.com"
      },
      customCss: [
        // Relative path to your @font-face CSS file.
        './src/fonts/font-face.css',
        './src/styles/custom.css'
      ],
      sidebar: [
        {
          label: "معرفی و راه اندازی",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "بررسی اجمالی", link: "/guides/review/"},
            { label: "راه اندازی فروشگاه", link: "/guides/getshop/"},
          ],
        },
        {
          label: "پنل ادمین",
          items: [
            {label: "اجرای پنل", link: "/adminpanel/access/"},
            {label: "بخش های مختلف پنل ادمین", link: "/adminpanel/explain/"},
            {label: "افزودن دسته بندی", link: "/adminpanel/addcategory/"},
            {label: "ویرایش دسته بندی ها", link: "/adminpanel/editcategory/"},
            {label: "افزودن محصولات", link: "/adminpanel/addproduct/"},
            {label: "لیست, حذف و ویرایش محصولات", link: "/adminpanel/list/"},
            {label: "ویرایش یکباره محصولات", link: "/adminpanel/once/"}
          ]
        },
        {
          label: "فروشگاه",
          items: [
            {label: "دریافت رسید و فاکتور فروش", link: "/foroshgah/resid/"},
            {label: "جستجوی بسیار کاربردی inline mode", link: "/foroshgah/inlinemode/"},
          ]
        }
      ],
	  defaultLocale: 'fa',
      locales: {
        fa: {
          label: "فارسی",
          dir: "rtl",
        },
      },
    }),
  ],
});
