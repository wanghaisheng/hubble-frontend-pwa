export default context => {
    return new Promise(function (resolve) {
        resolve({
            magento_base_price_amounts: {
                G: 'Gramm (g)',
                KG: 'Kilogramm (kg)',
                MG: 'Milligramm (mg)',
                LBS: 'Pound (lbs)',
                L: 'Liter (l)',
                ML: 'Milliliter (ml)',
                M: 'Meter (m)',
                IN: 'Zoll (Inch)',
                CM: 'Zentimeter (cm)',
                MM: 'Millimeter (mm)',
                PCS: 'Piece',
            },
            sku_label: 'sku',
            incl_tax: 'incl. Tax.',
            cheap_price_label: 'from',
            eq: 'eq.',
            delivery_time: 'Delivery time',
            manufacturer_label: 'Manufacturer No',
            quantity_discount: 'Quantity discount',
            discount_text: 'available! You save up to {discount_amount}% (maximum discount).',
            add_to_cart: 'Add to Cart',
            je: 'to',
            for_qty: 'for',
            each: 'each',
            view_discount: 'View discount',
            hide_discount: 'Hide discount',
            more: 'more',
            nav_sale: 'Sale',
            'nav_spare-parts': 'Spare-Parts',
            'nav_new-articles': 'New Articles',
            'nav_a-to-z': 'from A-Z',
            close: 'Close',
            details: 'Details',
            shopping_cart: 'Shopping Cart',
            shopping_cart_mini: 'Checkout',
            shopping_cart_label_item: 'item',
            shopping_cart_label_items: 'items',
            beschreibung: 'description',
            'fragen & antworten': 'Questions & Answers',
            'link-privacy-policy': '/data-privacy',
            'link-delivery-and-shipping-costs': '/delivery-and-shipping-costs',
            'link-terms-and-conditions': '/terms-and-conditions',
            Page: 'Page',
            Pages: 'Pages',
            Products: 'Products',
            Categories: 'Categories',
            Category: 'Category',
            Größe: 'Size',
            Manufacturer: 'Manufacturer',
            Material: 'Material',
            Art: 'Art',
            'All Categories': 'All Categories',
            'Add to Wishlist': 'Add To Wishlist',
            'Add to Cart': 'Add To Cart',
            mobile_menu_text: 'Menu',
            mobile_menu_back: 'back',
            tab_label_faq: 'FAQ',
            tab_label_downloads: 'downloads',
            tab_label_description: 'description',
            tab_label_manufacturer: 'further information about {name}',
            'Your shopping cart is empty': 'Your shopping cart is empty',
            'Customer Login': 'Customer Login',
            Search: 'Search',
            'Sort by': 'Sort by',
            Show: 'Show',
            position: 'position',
            name: 'name',
            price: 'price',
            relevance: 'relevance',
            name_asc: 'Name ▲',
            name_desc: 'Name ▼',
            price_asc: 'Price ▲',
            price_desc: 'Price ▼',
            season_asc: 'Oldest Products',
            season_desc: 'Newest Products',
            default_asc: 'Beste Auswahl',
            clickrate_asc: 'Most Wanted',
            manufacturer_asc: 'Manufacturer A-Z',
            manufacturer_desc: 'Manufacturer Z-A',
            Description: 'Description',
            'More info': 'More info',
            Reviews: 'Reviews',
            'excl. shipping': 'excl. shipping',
            Quantity: 'Quantity',
            Subtotal: 'Subtotal',
            Register: 'Register',
            Username: 'Username',
            Password: 'Password',
            'Customer Account Dashboard': 'Customer Account Dashboard',
            'Account Information': 'Account Information',
            'Edit Customer Information': 'Edit Customer Information',
            'Edit Information': 'Edit Information',
            'Shipping Address': 'Shipping Address',
            'No shipping address': 'No shipping address',
            'Edit Address': 'Edit Address',
            'Invoice Address': 'Invoice Address',
            'No billing address': 'No billing address',
            'Recent Orders': 'Recent Orders',
            'No orders yet': 'No orders yet',
            'Customer Dashboard': 'Customer Dashboard',
            'My Orders': 'My Orders',
            'First Name': 'First Name',
            'Last Name': 'Last Name',
            Street: 'Street',
            'Add new Address': 'Add new Address',
            'Your order is processing': 'Your order is processing',
            'Thank you for shopping!': 'Thank you for shopping!',
            'House no.': 'House no.',
            Postcode: 'Postcode',
            City: 'City',
            Order: 'Order',
            Date: 'Date',
            Total: 'Total',
            Status: 'Status',
            Action: 'Action',
            open: 'open',
            'View Order': 'View Order',
            'Customer Addresses': 'Customer Addresses',
            'Password repeat': 'Password repeat',
            'Customer Registration': 'Customer Registration',
            'Email Address': 'Email Address',
            'Repeat Email Address': 'Repeat Email Address',
            Price: 'Price',
            Login: 'Login',
            Address: 'Address',
            Payment: 'Payment',
            Summary: 'Summary',
            Complete: 'Complete',
            Shipping: 'Shipping',
            Cart: 'Cart',
            'Shop Service': 'Service',
            'About us': 'About us',
            'Customer Service': 'Customer Service',
            Information: 'Information',
            'Privacy and Cookie Policy': 'Privacy and Cookie Policy',
            'Search Terms': 'Search Terms',
            'Advanced Search': 'Advanced Search',
            'Contact us': 'Contact us',
            'Orders and Returns': 'Orders and Returns',
            'Payment methods': 'Payment methods',
            'Shipping methods': 'Shipping methods',
            Imprint: 'Imprint',
            Back: 'Back',
            'Show parent': 'Show {parent}',
            'Show all parent': 'Show all {parent}',
            copyright_footer: 'Copyright © 2020 digital.manufaktur GmbH. All rights reserved',
            'Place Order': 'Place Order',
            'Search for:': 'Search for:',
            Searchresults: 'Searchresults',
            'Successfully added item to cart.': 'Successfully added item to cart.',
            'Item quantity is already at maximum quantity.': 'Item quantity is already at maximum quantity.',
            'Successfully registered in as %s': 'Successfully registered in as %s',
            color: 'Color',
            size: 'Size',
            Service: 'Service',
            Performance: 'Performance',
            PWA: 'PWA',
            'Developer Experience': 'Developer Experience',
            Blog: 'Blog',
            'There are no reviews for this Product yet.': 'There are no reviews for this Product yet.',
            "There is no data assigned to attribute 'model'.": "There is no data assigned to attribute 'model'.",
            'Please select': 'Please select',
            'Customer Account': 'Customer Account',
            'I already have an account': 'I already have an account',
            'Reset your Password': 'Reset your Password',
            'Change your Password': 'Change your Password',
            'Current Password': 'Current Password',
            'New Password': 'New Password',
            'Confirm new password': 'Confirm new Password',
            'You successfully changed your password.': 'You successfully changed your password.',
            'Password could not be changed.': 'Password could not be changed.',
            'I am not having an account yet': 'I am not having an account yet',
            'Simply create a customer account with us.': 'Simply create a customer account with us.',
            'Find your favorite Shoes': 'Find your favorite Shoes',
            Remove: 'Remove',
            'Keep shopping': 'Keep shopping',
            'Show all results': 'Show all results',
            'Show more': 'Show more',
            'Continue reading': 'Continue reading',
            Filter: 'Filter',
            'filter': 'filter',
            'sort': 'sort',
            'Reset': 'Reset',
            'Reset Filter': 'Reset Filter',
            'Reset wishlist': 'Reset wishlist',
            ' selected': ' selected',
            'Apply & Close': 'Apply & Close',
            Apply: 'Apply',
            'Your choice:': 'Your choice:',
            'Reset all': 'Reset all',
            pagination_from: 'from',
            'Follow us:': 'Follow us:',
            'Newsletter registration': 'Newsletter registration',
            'Subscribe our Newsletter': 'Subscribe our Newsletter',
            'Ensure regular benefits!': 'Ensure regular benefits!',
            'Subscribe now': 'Subscribe now',
            'Fashion & More': 'Fashion & More',
            'Our Services': 'Our Services',
            'Pay easy and secure': 'Pay easy and secure',
            footer_hint: '* only applies to orders within Germany',
            'Your shopping wishlist is empty': 'Your shopping wishlist is empty',
            'Your wishlist': 'Your wishlist',
            Wishlist: 'Wishlist',
            shopping_wishlist: 'Shopping Cart',
            shopping_wishlist_mini: 'Checkout',
            wishlist_label_item: 'item',
            wishlist_label_items: 'items',
            'Successfully added item to wishlist.': 'Successfully added item to wishlist.',
            'Removed item from wishlist.': 'Removed item from wishlist.',
            'Add to wishlist': 'Add to wishlist',
            'Remove from wishlist': 'Remove from wishlist',
            'Go to wishlist': 'Go to wishlist',
            'Product details': 'Product details',
            'Search for: ': 'Search for: ',
            'Your Cart': 'Your Cart',
            'Shipping Costs': 'Shipping Costs',
            Totals: 'Total',
            'Go to checkout': 'Go to checkout',
            "I've got a voucher": "I've got a voucher",
            'Apply voucher': 'Apply',
            Code: 'Code',
            'Discover our products': 'Discover our products',
            'Back to shop': 'Back to shop',
            'Discover now': 'Discover Now',
            'Discover all': 'Discover all',
            'Buy now': 'Buy Now',
            Country: 'Country',
            Zipcode: 'Zipcode',
            Salutation: 'Salutation',
            'Houseno.': 'Houseno.',
            'I have a different shipping address': 'I have a different shipping address',
            'My Billing Address': 'My Billing Address',
            Birthday: 'Birthday',
            Phone: 'Phone',
            Austria: 'Austria',
            Germany: 'Germany',
            'Mrs.': 'Mrs.',
            'Mr.': 'Mr.',
            'Not specified': 'Not specified',
            'My Shipping Address (not billing address)': 'My Shipping Address (not billing address)',
            'Do not register': 'Do not register',
            'Guest order': 'Guest order',
            'I have read the ': 'I have read the ',
            'privacy policy.': 'privacy policy.',
            'I would like to get the newsletter.': 'I would like to get the newsletter.',
            '* Required information is marked with an asterisk.': '* Required information is marked with an asterisk.',
            '** We regularly send you carefully selected offers from our range by e-mail. All personal data requested during the newsletter registration will not be passed on to third parties. You may object to the use of your e-mail address for promotional purposes at any time online or through an informal e-mail.':
                '** We regularly send you carefully selected offers from our range by e-mail. All personal data requested during the newsletter registration will not be passed on to third parties. You may object to the use of your e-mail address for promotional purposes at any time online or through an informal e-mail.',
            Confirm: 'Confirm',
            'If you want us to send your parcel to a packing station, enter the word packing station at street, at no. The packing station no. and if the address is added, the postal number.':
                'If you want us to send your parcel to a packing station, enter the word "packing station" at street, at no. The packing station no. and if the address is added, the postal number.',
            'Billing Address': 'Billing Address',
            'Edit address': 'Edit address',
            'Edit shipping address': 'Edit shipping address',
            'Edit billing address': 'Edit billing address',
            'Select billing address': 'Select billing address',
            'Select shipping address': 'Select shipping address',
            'Create new address': 'Create new address',
            'Select new default address': 'Select new default address',
            'Select different address': 'Select different address',
            'Store new address failed': 'Store new address failed',
            'Select as default address': 'Select as default address',
            'Select as address': 'Select as address',
            'Delete selected addresses': 'Delete selected addresses',
            'Delete address failed': 'Delete address failed',
            'Store as new address': 'Store as new address',
            'Use this address as default address': 'Use this address as default address',
            Add: 'Add',
            'Voucher / Coupon': 'Voucher / Coupon',
            'Did you receive a discount coupon or coupon?': 'Did you receive a discount coupon or coupon?',
            'Coupon applied successfully: ': 'Coupon applied successfully: ',
            'Error: coupon code must not be empty': 'Es ist ein Fehler aufgetreten: Gutscheinfeld darf nicht leer sein.',
            'Der eingegebene Gutschein-Code ist ung&uuml;ltig.': 'Es ist ein Fehler aufgetreten: Der eingegebene Gutschein-Code ist ungültig.',
            'Der eingegebene Gutschein-Code ist nicht mehr g&uuml;ltig.':
                'Es ist ein Fehler aufgetreten: Der eingegebene Gutschein-Code ist nicht mehr gültig.',
            'Coupon is already in cart': 'Coupon is already in cart',
            'There already exist a coupon.': 'There already exist a coupon.',
            'Removed coupon from cart.': 'Removed coupon from cart.',
            Comment: 'Comment',
            'Your comment': 'Your comment',
            'Add your comments to this order here:': 'Add your comments to this order here:',
            Continue: 'Continue',
            'Confirm and order': 'Confirm and order',
            'By submitting your order, you confirm that you have read and accepted our':
                'By submitting your order, you confirm that you have read and accepted our',
            'terms and conditions.': 'terms and conditions.',
            'Before submitting your order, you will once again see the data and products you have entered, with the help of the Change links next to the individual data you have the opportunity to correct them again. You can end the order process at any time by closing your browser or by clicking on the button "Order by Paypal".':
                'Before submitting your order, you will once again see the data and products you have entered, with the help of the Change links next to the individual data you have the opportunity to correct them again. You can end the order process at any time by closing your browser or by clicking on the button "Order by Paypal".',
            New: 'New',
            Sale: 'Sale',
            'Please choose a payment method first': 'Please choose a payment method first',
            'Please choose a shipping method first': 'Please choose a shipping method first',
            'Edit shipping method': 'Edit shipping method',
            'Edit payment method': 'Edit payment method',
            'I have read the notice and accept it.': 'I have read the notice and accept it.',
            'Please confirm that you have read this information.': 'Please confirm that you have read this information.',
            'We have sent you an order confirmation by e-mail.': 'We have sent you an order confirmation by e-mail.',
            'Your Order Id: ': 'Your Order Id: ',
            'Successfully logged out': 'Successfully logged out.',
            'Logout failed': 'Logout failed',
            '5': '5',
            '10': '10',
            '20': '20',
            '25': '25',
            '40': '40',
            '50': '50',
            '80': '80',
            '120': '120',
            all: 'all',
            'New Entry': 'New Entry',
            Jobs: 'Jobs',
            Filialen: 'Filialen',
            Newsletter: 'Newsletter',
            'Lieferbedingungen & Versandkosten': 'Lieferbedingungen & Versandkosten',
            Bezahlung: 'Bezahlung',
            Widerrufsrecht: 'Widerrufsrecht',
            AGB: 'AGB',
            Color: 'Color',
            'Credit Card': 'Credit Card',
            Paypal: 'Paypal',
            ELV: 'ELV',
            'ELV SEPA Debit payment': 'ELV SEPA Debit payment',
            'After checkout you will be redirected to paypal.': 'After checkout you will be redirected to paypal.',
            'Online Bank Transfer': 'Online Bank Transfer',
            'After checkout you will be redirected to the selected payment provider.':
                'After checkout you will be redirected to the selected payment provider.',
            'Please insert valid IBAN': 'Please insert valid IBAN',
            'Please insert valid BIC': 'Please insert valid BIC',
            Invoice: 'Invoice',
            Prepayment: 'Prepayment',
            'Recaptcha could not be executed.': 'Recaptcha could not be executed.',
            'Get new Password': 'Get new Password',
            'Oops, something went wrong': 'Oops, something went wrong',
            'Something went wrong': 'Something went wrong',
            'There are no products available in this category or for this filter.':
                'There are no products available in this category or for this filter.',
            'Shipping to this country is not allowed': 'Shipping to this country is not allowed',
            'See description': 'See description',
            select: 'select',
            'no shipping costs': 'no shipping costs',
            Relevance: 'Relevance',
            'to ': 'to ',
            'from ': 'from ',
            'Previous Page': 'Previous Page',
            'Next Page': 'Next Page',
            'Data protection': 'data protection',
            'This website uses cookies to enable interaction with other websites and social networks and to increase convenience of using this website. For details, please refer to our information on ': 'This website uses cookies to enable interaction with other websites and social networks and to increase convenience of using this website. For details, please refer to our information on ',
            'Understood': 'Understood',
            'We regularly send you carefully selected offers from our range of products by email. All personal data requested in the context of the newsletter registration will not be passed on to third parties. You can object to the use of your e-mail address for advertising purposes at any time online or by sending an e-mail.': 'We regularly send you carefully selected offers from our range of products by email. All personal data requested in the context of the newsletter registration will not be passed on to third parties. You can object to the use of your e-mail address for advertising purposes at any time online or by sending an e-mail.',
            'Your e-mail address*': 'Your e-mail address*',
            'Your date of birth**': 'Your date of birth**',
            'E-mail address': 'E-mail address',
            '* Mandataroy fields are marked with an asterisk *.': '* Mandataroy fields are marked with an asterisk *.',
            '** Please enter your date of birth in this field, if you want to receive your personal birthday newsletter including a personal coupon': '** Please enter your date of birth in this field, if you want to receive your personal birthday newsletter including a personal coupon',
            'Subscribe to Newsletter': 'Subscribe to Newsletter',

            // Validation
            'The password is required.': 'Password is required',
            'The password confirmation is required.': 'Password confirmation is required',
            'The email is required.': 'Email is required',
            'The birthday is required.': 'Birthday is required',
            'The gender is required.': 'Salutation is required',
            'The message is required.': 'Message is required',
            'The firstName is required.': 'First name is required',
            'The lastName is required.': 'Last name is required',
            'The street is required.': 'Street is required',
            'The houseNo is required.': 'Housenumber is required',
            'The postal is required.': 'Zipcode is required',
            'The city is required.': 'City is required',
            'The country is required.': 'Country is required',
            'Name required.': 'Name required.',

            'The password confirmation does not match.': 'Password Confirm must be equal to password field',
            'The email-repeat confirmation does not match.': 'Email repetition must be equal to email field',
            'The email-repeat is required.': 'Email repetition must be equal to email field',
            'The email-repeat must be a valid email address.': 'Email structure is not valid',

            'The field may not be longer than 5 characters.': 'The field may not be longer than 5 characters.',
            'The field may not be longer than 30 characters.': 'The field may not be longer than 30 characters.',
            'The field may not be longer than 60 characters.': 'The field may not be longer than 60 characters.',

            'The password must be at least 8 characters long.': 'The password must be at least 8 characters long',
            'The email must be a valid email address.': 'Email structure is not valid',

            'Birthday structure is not valid.': 'Birthday structure needs to be dd.mm.year',
            'The postal must be a number.': 'Zipcode is number only',

            'Please accept that you have read our privacy policy.': 'Please accept that you have read our privacy policy.',
            'The email has already been taken.': 'The email has already been taken.',
            'Login failed': 'Login failed',
            'Register failed': 'Register failed',
            'Please complete your credit card information': 'Please complete your credit card information',

            'Please enter your password to change your email address': 'Please enter your password to change your email address',
            'Current Email Address': 'Current Email Address',
            'New Email Address': 'New Email Address',
            'Confirm New Email Address': 'Confirm New Email Address',

            'Save Profile': 'Save Profile',

            'You successfully changed your information.': 'You successfully changed your information.',

            'Email could not be changed.': 'Email could not be changed.',

            'No network connection.': 'No network connection.',

            'You successfully signed up to our newsletter.': 'You successfully signed up to our newsletter.',

            'Subscription was not successful': 'Subscription was not successful',

            'No products found': 'No products found',

            'Resetting password is currently not available': 'Resetting password is currently not available',

            'We are sorry there is no such product. Please try another one.': 'We are sorry there is no such product. Please try another one.',

            'No search results for:': 'No search results for:',

            'A new password has been sent to your e-mail adress.': 'A new password has been sent to your e-mail adress.',

            'Requesting a new password has failed': 'Requesting a new password has failed',
            'Available immediately, delivery time 2-5 working days': 'Available immediately, delivery time 2-5 working days',
            'Free shipping & returns': 'Free shipping & returns',
            '100 days right to return': '100 days right to return'
        });
    });
};
