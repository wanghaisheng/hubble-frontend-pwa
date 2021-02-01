export default (context) => {
    return new Promise(function (resolve) {
        resolve({
            'magento_base_price_amounts': {
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
                PCS: 'Stück',
            },
            'sku_label': 'Art.-Nr.',
            'incl_tax': 'Preis inkl. 19% MwSt',
            'cheap_price_label': 'ab',
            'eq': 'entspricht',
            'delivery_time': 'Lieferzeit:',
            'manufacturer_label': 'Herstellernummer',
            'quantity_discount': 'Mengenrabatt',
            'discount_text': 'verfügbar! Preis bis zu {discount_amount}% gesenkt (maximaler Preisnachlass).',
            'add_to_cart': 'In den Warenkorb',
            'je': 'je',
            'for_qty': 'ab Menge',
            'each': '',
            'view_discount': 'Rabattstaffel ansehen',
            'hide_discount': 'Rabattstaffel schließen',
            'more': 'mehr',
            'nav_sale': 'Angebot',
            'nav_spare-parts': 'Ersatzteile',
            'nav_new-articles': 'Neue Artikel',
            'nav_a-to-z': 'von A-Z',
            'close': 'Schließen',
            'details': 'Details',
            'shopping_cart': 'Warenkorb',
            'shopping_cart_mini': 'Zur Kasse',
            'shopping_cart_label_item': 'Artikel',
            'shopping_cart_label_items': 'Artikel',
            'with or without tax': 'MIT oder OHNE MwSt.?',
            'For business clients we show our prices without tax.':
                'Für Firmenkunden zeigen wir gerne auch unsere Preise ohne MwSt. an.',
            'Please select:': 'Bitte wählen Sie:',
            'Business client': 'Firmenkunde',
            'without tax': '(ohne MwSt.)',
            'Consumer': 'Privatkunde',
            'with tax': '(mit MwSt.)',
            'Remember my choise': 'Diese Einstellung merken',
            'View details': 'Details ansehen',
            'One moment please....': 'Bitte warten...',
            'Product successfully added to cart!': 'Das Produkt wurde in den Warenkorb gelegt!',
            'Business User?': 'Gewerbekunde?',
            'This website requires cookies to provide all of its features. For more information on what data is contained in the cookies, please see our':
                'Um unsere Webseite für Sie optimal zu gestalten und fortlaufend verbessern zu können, verwenden wir Cookies. Durch die weitere Nutzung der Webseite stimmen Sie der Verwendung von Cookies zu. Weitere Informationen zu Cookies erhalten Sie in unserer',
            'link-privacy-policy': '/Datenschutz',
            'link-delivery-and-shipping-costs': '/Liefer-und-Versandkosten',
            'link-terms-and-conditions': '/Unsere-AGB',
            'Privacy Policy page': 'Datenschutzerklärung',
            'Allow': 'Erlauben',
            'Page': 'Seite',
            'Pages': 'Seiten',
            'Products': 'Produkte',
            'Categories': 'Kategorien',
            'Category': 'Kategorie',
            'Größe': 'Größe',
            'Manufacturer': 'Marke',
            'Material': 'Obermaterial',
            'Art': 'Art',
            'All Categories': 'Alle Kategorien',
            'Add to Wishlist': 'Zur Wunschliste hinzufügen',
            'Add to Cart': 'In den Warenkorb legen',
            'mobile_menu_text': 'Menü',
            'mobile_menu_back': 'Zurück',
            'tab_label_faq': 'Fragen & Antworten',
            'tab_label_downloads': 'downloads',
            'tab_label_description': 'beschreibung',
            'tab_label_manufacturer': 'weitere infos über {name}',
            'Your shopping cart is empty': 'Ihr Warenkorb ist leider noch leer',
            'Search results for:': 'Suchergebnisse für:',
            'Price': 'Preis',
            'No search results for:': 'Keine Suchergebnisse für:',
            'Show': 'Zeige',
            'position': 'Position',
            'name': 'Bezeichnung',
            'relevance': 'Relevanz',
            'price': 'Preis',
            'name_asc': 'Name ▲',
            'name_desc': 'Name ▼',
            'price_asc': 'Preis ▲',
            'price_desc': 'Preis ▼',
            'season_asc': 'Älteste Produkte',
            'season_desc': 'Neueste Produkte',
            'default_asc': 'Beste Auswahl',
            'clickrate_asc': 'Beliebtheit',
            'manufacturer_asc': 'Marke A-Z',
            'manufacturer_desc': 'Marke Z-A',
            'Quantity': 'Menge',
            'Sort by': 'Sortieren nach',
            'Related Products': 'Ähnliche Produkte',
            'Upselling Products': 'Was andere Kunden kauften',
            'Customer Account Dashboard': 'Benutzerkonto Übersicht',
            'Account Information': 'Kontoinformationen',
            'Edit Customer Information': 'Kundeninformationen bearbeiten',
            'Edit Information': 'Informationen bearbeiten',
            'Edit': 'Bearbeiten',
            'Shipping Address': 'Versandadresse',
            'Edit Address': 'Adresse bearbeiten',
            'Add Address': 'Adresse hinzufügen',
            'Invoice Address': 'Rechnungsadresse',
            'Recent Orders': 'Letzte Bestellungen',
            'All Orders': 'Alle Bestellungen',
            'Order': 'Bestellung',
            'Date': 'Datum',
            'Total': 'Bestellsumme',
            'Status': 'Status',
            'Action': 'Aktion',
            'View Order': 'Bestellung ansehen',
            'Your order is processing': 'Die Bestellung wird verarbeitet, bitte haben Sie einen Moment Geduld.',
            'Thank you for shopping!': 'Vielen Dank für Ihren Einkauf.',
            'Customer Login': 'Kundenlogin',
            'Customer Addresses': 'Adressbuch',
            'Remove Address': 'Adresse entfernen',
            'Save Address': 'Adresse aktualisieren',
            'Add new Address': 'Neue Adresse hinzufügen',
            'open': 'Offen',
            'No orders yet': 'Noch keine Bestellungen vorhanden',
            'Customer Dashboard': 'Benutzerkonto-Übersicht',
            'My Orders': 'Meine Bestellungen',
            'Search': 'Suche',
            'Subtotal': 'Zwischensumme',
            'excl. shipping': 'zzgl. Versandkosten',
            'Description': 'Beschreibung',
            'Reviews': 'Bewertungen',
            'More info': 'Mehr erfahren',
            'No shipping address': 'Keine Versandadresse vorhanden',
            'No billing address': 'Keine Rechnungsadresse vorhanden',
            'First Name': 'Vorname',
            'Last Name': 'Nachname',
            'Street': 'Straße',
            'House no.': 'Hausnummer',
            'Postcode': 'Postleitzahl',
            'City': 'Ort',
            'Customer Registration': 'Neu registrieren',
            'Register': 'Registrieren',
            'Username': 'Benutzer',
            'Email Address': 'E-Mail Adresse',
            'Repeat Email Address': 'E-Mail Adresse wiederholen',
            'Password': 'Passwort',
            'Password repeat': 'Passwort wiederholen',
            'Login': 'Anmelden',
            'Address': 'Adresse',
            'Payment': 'Zahlungsart',
            'Summary': 'Zusammenfassung',
            'Complete': 'Fertig',
            'Shipping': 'Versand',
            'Cart': 'Warenkorb',
            'Shop Service': 'Service',
            'About us': 'Über uns',
            'Customer Service': 'Kundenservice',
            'Information': 'Informationen',
            'Privacy and Cookie Policy': 'Datenschutz',
            'Search Terms': 'Suchbegriffe',
            'Advanced Search': 'Erweiterte Suche',
            'Contact us': 'Kontakt',
            'Orders and Returns': 'Bestellungen und Rückgaberecht',
            'Payment methods': 'Bezahlung',
            'Shipping methods': 'Versand',
            'Imprint': 'Impressum',
            'Back': 'Zurück',
            'Show parent': '{parent} anzeigen',
            'Show all parent': 'Alle {parent} anzeigen',
            'copyright_footer': 'Copyright © 2020 digital.manufaktur GmbH. Alle Rechte vorbehalten',
            'Place Order': 'Kostenpflichtig bestellen',
            'Search for:': 'Suchergebnisse für:',
            'Searchresults': 'Suchergebnisse',
            'Successfully added item to cart.': 'Artikel zum Warenkorb hinzugefügt.',
            'Item quantity is already at maximum quantity.': 'Artikel hat maximale Anzahl erreicht.',
            'Successfully registered in as %s': 'Erfolgreich registriert als %s',
            'Hubble performance boost activated!': 'Shop mit Hubble Boost!',
            'Without hubble performance boost...': 'Shop ohne Hubble Boost...',
            'color': 'Farbe',
            'size': 'Größe',
            'Service': 'Service',
            'Performance': 'Performance',
            'PWA': 'PWA',
            'Developer Experience': 'Developer Experience',
            'Blog': 'Blog',
            'There are no reviews for this Product yet.': 'Es sind noch keine Produktbewertungen vorhanden.',
            "There is no data assigned to attribute 'model'.": "Das Attribut 'model' ist nicht belegt.",
            'Please select': 'Bitte auswählen',
            'Customer Account': 'Kundenkonto',
            'I already have an account': 'Ich habe bereits ein Konto',
            'You already have an account?': 'Sie haben bereits ein Konto?',
            'Reset your Password': 'Passwort vergessen',
            'Change your Password': 'Passwort ändern',
            'Current Password': 'Aktuelles Passwort',
            'New Password': 'Neues Passwort',
            'Confirm new Password': 'Neues Passwort bestätigen',
            'You successfully changed your password.': 'Sie haben erfolgreich Ihr Passwort geändert.',
            'Password could not be changed.': 'Passwort konnte nicht geändert werden.',
            'I am not having an account yet': 'Ich habe noch kein Konto',
            'Simply create a customer account with us.': 'Erstellen Sie ganz einfach ein Kundenkonto bei uns.',
            'See description': 'Beschreibung ansehen',
            'select': 'wählen',
            'no shipping costs': 'Keine Versandkosten',
            'Remove': 'Löschen',
            'Keep shopping': 'Weiter einkaufen',
            'Show all results': 'Alle anzeigen',
            'Our care recommendation': 'Unsere Pflegeempfehlung',
            'Show more': 'Zeige mehr',
            'Continue reading': 'Weiterlesen',
            'Filter': 'Filter',
            'filter': 'filtern',
            'sort': 'sortieren',
            'Reset': 'Zurücksetzen',
            'Reset Filter': 'Zurücksetzen',
            'Reset wishlist': 'Zurücksetzen',
            ' selected': ' ausgewählt',
            'Apply & Close': 'Anwenden & schließen',
            'Open size chart': 'Größentabelle öffnen',
            'Size chart': 'Größentabelle',
            'Apply': 'Anwenden',
            'Your choice:': 'Ihre Auswahl:',
            'Reset all': 'Alle Filter zurücksetzen',
            'pagination_from': 'von',
            'Follow us:': 'Folgen Sie uns:',
            'Newsletter registration': 'Newsletter Anmeldung',
            'Subscribe our Newsletter': 'Newsletter abonnieren',
            'Ensure regular benefits!': 'Regelmäßig Vorteile sichern!',
            'Subscribe now': 'Jetzt abonnieren',
            'Fashion & More': 'Fashion & More',
            'Our Services': 'Unser Service',
            'Pay easy and secure': 'Ganz einfach und sicher bezahlen',
            'footer_hint': '* gilt nur für Bestellungen innerhalb Deutschlands',
            'Your shopping wishlist is empty': 'Keine Produkte auf der Wunschliste',
            'Your wishlist': 'Ihre Wunschliste',
            'Wishlist': 'Wunschliste',
            'shopping_wishlist': 'Warenkorb',
            'wishlist_mini': 'Zur Kasse',
            'wishlist_label_item': 'Artikel',
            'wishlist_label_items': 'Artikel',
            'Successfully added item to wishlist.': 'Artikel erfolgreich auf die Wunschliste gesetzt.',
            'Removed item from wishlist.': 'Artikel wurde von der Wunschliste entfernt.',
            'Add to wishlist': 'Zur Wunschliste hinzufügen',
            'Remove from wishlist': 'Von der Wunschliste entfernen',
            'Go to wishlist': 'Zur Wunschliste',
            'Product details': 'Produktdetails',
            'Search for: ': 'Suche nach: ',
            'Your Cart': 'Ihr Warenkorb',
            'Shipping Costs': 'Versandkosten',
            'Totals': 'Gesamtsumme',
            'Go to checkout': 'Zur Kasse',
            "I've got a voucher": 'Ich habe einen Gutschein',
            'Apply voucher': 'Einlösen',
            'Code': 'Code',
            'Discover our products': 'Unser Sortiment entdecken',
            'Back to shop': 'Zurück zum Shop',
            'Discover now': 'Jetzt entdecken',
            'Discover all': 'Alle entdecken',
            'Buy now': 'Jetzt Kaufen',
            'Country': 'Land',
            'Zipcode': 'PLZ',
            'Salutation': 'Anrede',
            'Houseno.': 'Nr.',
            'I have a different shipping address': 'Ich habe eine abweichende Lieferadresse',
            'My Billing Address': 'Meine Rechnungsadresse',
            'Birthday': 'Geburtstag',
            'Phone': 'Telefon',
            'Austria': 'Österreich',
            'Germany': 'Deutschland',
            'Mrs.': 'Frau',
            'Mr.': 'Herr',
            'Not specified': 'Divers',
            'My Shipping Address (not billing address)': 'Meine abweichende Lieferadresse (nicht Rechnungsadresse)',
            'Do not register': 'Kein Konto anlegen',
            'Guest order': 'Als Gast bestellen',
            'I have read the ': 'Ich habe die Datenschutzbestimmungen zur Kenntnis genommen. ',
            'privacy policy.': 'Datenschutzbestimmungen',
            'I would like to get the newsletter.': 'Ja, ich möchte in Zukunft den Newsletter erhalten.',
            '* Required information is marked with an asterisk.':
                '* Pflichtangaben sind mit einem Sternchen gekennzeichnet.',
            'Confirm': 'Bestätigen',
            'Similar Products': 'Ähnliche Artikel',
            'Customers also bought': 'Kunden kauften auch',
            'All': 'Alle',
            'More': 'Mehr',
            'in': 'in',
            'If you want us to send your parcel to a packing station, enter the word packing station at street, at no. The packing station no. and if the address is added, the postal number.':
                'Möchten Sie, dass wir Ihr Paket an eine Packstation senden, tragen Sie bei Straße das Wort „Packstation“ ein,  bei Nr. die Packstation-Nr. und bei Adresszusatz die Postnummer.',
            'Billing Address': 'Rechungsadresse',
            'Edit address': 'Adresse bearbeiten',
            'Edit shipping address': 'Versandadresse bearbeiten',
            'Edit billing address': 'Rechungsadresse bearbeiten',
            'Select billing address': 'Rechungsadresse auswählen',
            'Select shipping address': 'Versandadresse auswählen',
            'Create new address': 'Neue Adresse hinzufügen',
            'Select new default address': 'Neue Standardadresse auswählen',
            'Select as address': 'Als Adresse auswählen',
            'Select different address': 'Andere Adresse auswählen',
            'Store new address failed': 'Neue Adresse anlegen fehlgeschlagen',
            'Select as default address': 'Als Standardaddresse auswählen',
            'Delete selected addresses': 'Ausgewählte Adressen löschen',
            'Delete address failed': 'Addresse löschen fehlgeschlagen',
            'Store as new address': 'Als neue Adresse anlegen',
            'Use this address as default address': 'Diese Adresse als Standardadresse verwenden',
            'Set different address as shipping address': 'Andere Adresse als Versandadresse anlegen',
            'Add': 'Hinzufügen',
            'Voucher / Coupon': 'Rabatt-Coupon / Gutschein',
            'Did you receive a discount coupon or coupon?':
                'Haben Sie einen Rabatt-Coupon oder einen Gutschein erhalten?',
            'Coupon applied successfully: ': 'Gutschein erfolgreich eingelöst: ',
            'Error: coupon code must not be empty':
                'Es ist ein Fehler aufgetreten: Gutscheinfeld darf nicht leer sein.',
            'Der eingegebene Gutschein-Code ist ung&uuml;ltig.':
                'Es ist ein Fehler aufgetreten: Der eingegebene Gutschein-Code ist ungültig.',
            'Der eingegebene Gutschein-Code ist nicht mehr g&uuml;ltig.':
                'Es ist ein Fehler aufgetreten: Der eingegebene Gutschein-Code ist nicht mehr gültig.',
            'Coupon is already in cart': 'Gutschein bereits eingelöst.',
            'There already exist a coupon.': 'Es ist bereits ein Gutschein eingelöst.',
            'Removed coupon from cart.': 'Gutschein erfolgreich entfernt.',
            'Comment': 'Anmerkung',
            'Your comment': 'Ihre Anmerkung',
            'Add your comments to this order here:': 'Fügen Sie Hier Ihre Anmerkungen zu diese Bestellung ein:',
            'Continue': 'Weiter',
            'Confirm and order': 'Bestätigen und Bestellen',
            'By submitting your order, you confirm that you have read and accepted our':
                'Mit dem Abschicken Ihrer Bestellung akzeptieren Sie unsere ',
            'terms and conditions.': 'Allgemeinen Geschäftsbedingungen.',
            'Before submitting your order, you will once again see the data and products you have entered, with the help of the Change links next to the individual data you have the opportunity to correct them again. You can end the order process at any time by closing your browser or by clicking on the button "Order by Paypal".':
                'Vor dem Absenden Ihrer Bestellung sehen Sie nochmals die von Ihnen eingegebenen Daten und Produkte, mithilfe der Ändern Links neben den einzelnen Daten haben Sie nochmals die Möglichkeit diese zu korrigieren. Den Bestellvorgang können Sie jederzeit durch Schließen Ihres Browsers beenden oder durch Drücken des Buttons „Zahlungspflichtig bestellen“ abschließen.',
            'New': 'Neu',
            'Sale': 'Sale',
            'Please choose a payment method first': 'Bitte wählen Sie eine Bezahlart aus.',
            'Please choose a shipping method first': 'Bitte wählen Sie eine Versandart aus.',
            'Edit shipping method': 'Versandart bearbeiten',
            'Edit payment method': 'Zahlungsart bearbeiten',
            'I have read the notice and accept it.': 'Ich habe den Hinweis gelesen und akzeptiere ihn.',
            'Please confirm that you have read this information.':
                'Bitte bestätigen Sie, dass Sie diese Informationen gelesen haben.',
            'We have sent you an order confirmation by e-mail.':
                'Wir haben Ihnen eine Bestellbestätigung per E-Mail geschickt.',
            'Your Order Id: ': 'Ihre Bestellnummer: ',
            'Please select {atrName} first': 'Bitte zuerst {atrName} auswählen',
            'Successfully logged out': 'Erfolgreich ausgeloggt',
            'Logout failed': 'Logout fehlgeschlagen',
            'new': 'neu',
            'Hi,': 'Hallo,',
            'Logout': 'Ausloggen',
            '5': '5',
            '10': '10',
            '20': '20',
            '25': '25',
            '40': '40',
            '50': '50',
            '80': '80',
            '120': '120',
            'all': 'alle',
            'This page doesn’t exist': 'Die gesuchte Seite wurde leider nicht gefunden',
            'The link you clicked on may be broken or no longer exist.':
                'Die Seite ist entweder gelöscht oder verschoben worden.',
            'You may have followed an outdated link or mistyped.':
                'Möglicherweise sind Sie einem veralteten Link gefolgt oder haben sich vertippt.',
            'Newsletter': 'Newsletter',
            'Lieferbedingungen & Versandkosten': 'Lieferbedingungen & Versandkosten',
            'Bezahlung': 'Bezahlung',
            'Widerrufsrecht': 'Widerrufsrecht',
            'AGB': 'AGB',
            'Jobs': 'Jobs',
            'New Entry': 'New Entry',
            'Filialen': 'Filialen',
            'Color': 'Farbe',
            'Credit Card': 'Kreditkarte',
            'Paypal': 'Paypal',
            'ELV': 'Lastschrift',
            'ELV SEPA Debit payment': 'SEPA ELV Elektronisches Lastschriftverfahren',
            'After checkout you will be redirected to paypal.':
                'Nach dem Kaufabschluss werden Sie zu Paypal weitergeleitet.',
            'Online Bank Transfer': 'Online Überweisung',
            'After checkout you will be redirected to the selected payment provider.':
                'Nach dem Kaufabschluss werden Sie zum gewählten Zahlungsanbieter weitergeleitet.',
            'Please insert valid IBAN': 'Bitte geben Sie eine gültige IBAN ein.',
            'Please insert valid BIC': 'Bitte geben Sie eine gültige BIC ein.',
            'Invoice': 'Rechnung',
            'Prepayment': 'Vorkasse',
            'Recaptcha could not be executed.': 'Recaptcha konnte nicht ausgeführt werden.',
            'Get new Password': 'Neues Passwort anfordern',
            'Oops, something went wrong': 'Ups, da ist etwas schiefgelaufen.',
            'Something went wrong': 'Da ist etwas schiefgelaufen.',
            'There are no products available in this category or for this filter.':
                'Zurzeit liegen keine Ergebnisse für diese Kategorie oder für diesen Filter vor.',
            'Shipping to this country is not allowed': 'Der Versand in das gewählte Land ist leider nicht möglich.',
            'Relevance': 'Relevanz',
            'to ': 'bis ',
            'from ': 'ab ',
            'Previous Page': 'voherige Seite',
            'Next Page': 'Nächste Seite',
            'Data protection': 'Datenschutz',
            'This website uses cookies to enable interaction with other websites and social networks and to increase convenience of using this website. For details, please refer to our information on ':
                'Diese Website verwendet Cookies, um die Interaktion mit anderen Websites und sozialen Netzwerken zu ermöglichen sowie den Komfort bei der Benutzung dieser Website zu erhöhen. Details entnehmt Ihr bitte unseren Hinweisen zum ',
            'Understood': 'Verstanden',
            'We regularly send you carefully selected offers from our range of products by email. All personal data requested in the context of the newsletter registration will not be passed on to third parties. You can object to the use of your e-mail address for advertising purposes at any time online or by sending an e-mail.':
                'Wir senden Ihnen regelmäßig sorgfältig ausgesuchte Angebote aus unserem Sortiment per E-Mail zu. Alle im Rahmen der Newsletter-Anmeldung abgefragten personenbezogenen Daten werden nicht an Dritte weiter gegeben. Sie können der Nutzung Ihrer E-Mail-Adresse für Werbezwecke jederzeit online oder durch eine formlose E-Mail widersprechen.',
            'Your e-mail address*': 'Ihre E-Mail Adresse*',
            'Your date of birth**': 'Ihr Geburtsdatum**',
            'E-mail address': 'E-Mail Adresse',
            '* Mandataroy fields are marked with an asterisk *.':
                '* Pflichtangaben sind mit einem Sternchen * gekennzeichnet.',
            '** Please enter your date of birth in this field, if you want to receive your personal birthday newsletter including a personal coupon':
                '** Bitte tragen Sie Ihr Geburtsdatum in dieses Feld ein, wenn Sie zusätzlich den Geburtstagsnewsletter inkl. persönlichem Gutschein erhalten möchten.',
            'Subscribe to Newsletter': 'Newsletter Abonnieren',
            'Unsubscribe from Newsletter': 'Vom Newsletter abmelden',
            'Subject': 'Thema',
            'Submit': 'Absenden',
            'Subscribe': 'Abonnieren',
            'Unsubscribe': 'Abmelden',
            'We send you an email with further instructions to reset your password.':
                'Wir haben Ihnen eine E-Mail zum Zurücksetzen ihres Passworts gesendet.',

            // Validation
            'The password is required.': 'Passwort ist ein Pflichtfeld',
            'The password confirmation is required.': 'Passwort wiederholen ist ein Pflichtfeld',
            'The email is required.': 'E-Mail Adresse ist ein Pflichtfeld',
            'The birthday is required.': 'Geburtstag ist ein Pflichtfeld',
            'The message is required.': 'Nachricht ist ein Pflichtfeld',
            'The gender is required.': 'Anrede ist ein Pflichtfeld',
            'The firstName is required.': 'Vorname ist ein Plfichtfeld',
            'The lastName is required.': 'Nachname ist ein Plfichtfeld',
            'The street is required.': 'Straße ist ein Plfichtfeld',
            'The houseNo is required.': 'Hausnummer ist ein Plfichtfeld',
            'The postal is required.': 'PLZ ist ein Plfichtfeld',
            'The city is required.': 'Stadt ist ein Plfichtfeld',
            'The country is required.': 'Land ist ein Plfichtfeld',
            'Name required.': 'Benutzer ist ein Pflichtfeld.',

            'The field may not be longer than 5 characters.': 'Das Feld darf nicht länger als 5 Zeichen sein.',
            'The field may not be longer than 30 characters.': 'Das Feld darf nicht länger als 30 Zeichen sein.',
            'The field may not be longer than 60 characters.': 'Das Feld darf nicht länger als 60 Zeichen sein.',

            'The password confirmation does not match.': 'Passwort wiederholen muss mit Passwort übereinstimmen',
            'The email-repeat confirmation does not match.':
                'E-Mail Adresse wiederholen muss mit E-Mail Adresse übereinstimmen.',
            'The email-repeat is required.': 'E-Mail Adresse wiederholen muss mit E-Mail Adresse übereinstimmen.',
            'The email-repeat must be a valid email address.': 'Keine gültige E-Mail Adresse',

            'The password must be at least 8 characters long.': 'Das Passwort muss mindestens 8 Zeichen lang sein',
            'The email must be a valid email address.': 'Keine gültige E-Mail Adresse',

            'Birthday structure is not valid.': 'Geburtstagsformat muss tt.mm.jahr sein',
            'The postal must be a number.': 'Keine gültige PLZ',

            'Please accept that you have read our privacy policy.':
                'Bitte bestätigen Sie, dass Sie die Datenschutzbestimmungen zur Kenntnis genommen haben.',
            'The email has already been taken.': 'Die E-Mail Adresse existiert bereits.',
            'Register failed': 'Registrierung fehlgeschlagen',
            'Login failed': 'Login fehlgeschlagen. Benutzername oder Passwort sind nicht korrekt.',
            'Please complete your credit card information': 'Bitte die Kreditkarteninformationen vervollständigen.',

            'Please enter your password to change your email address':
                'Bitte geben Sie Ihr Passwort ein, um Ihre Email Addresse zu ändern',
            'Current Email Address': 'Aktuelle Email Addresse',
            'New Email Address': 'Neue Email Addresse',
            'Confirm New Email Address': 'Neue Email Addresse bestätigen',

            'Save Profile': 'Profil speichern',

            'You successfully changed your information.': 'Sie haben erfolgreich Ihre Informationen geändert.',

            'Email could not be changed.': 'Email konnte nicht geändert werden.',

            'No network connection.': 'Keine Netzwerk Verbindung vorhanden.',

            'No products found': 'Keine Produkte gefunden',

            'We are sorry there is no such product. Please try another one.':
                'Leider gibt es dieses Produkt nicht. Bitte suchen Sie nach einem anderen.',

            'Resetting password is currently not available': 'Passwort zurücksetzen ist zur Zeit nicht möglich',

            'You successfully signed up to our newsletter.': 'Die Newsletter Anmeldung war erfolgreich.',
            'You successfully unsubscribed from our newsletter.':
                'Sie haben sich erfolgreich vom Newsletter abgemeldet.',

            'You successfully contacted us.': 'Ihr Kontaktformular wurde erfolgreich übermittelt.',

            'Subscription was not successful': 'Anmeldung war nicht erfolgreich',

            'A new password has been sent to your e-mail adress.':
                'Ihnen wurde ein neues Passwort an Ihre E-Mail Adresse gesendet.',

            'Requesting a new password has failed': 'Neues Password anfordern fehlgeschlagen',
            'Available immediately, delivery time 2-5 working days': 'Sofort verfügbar, Lieferzeit 2-5 Werktage',
            'Free shipping & returns': 'Kostenloser Versand & Rückversand',
            '100 days right to return': '100 Tage Rückgaberecht',

            'Contact Information': 'Ihre Kontaktinformationen',

            'I would like to checkout as a guest': 'Ich möchte als Gast bestellen',
            'Show Cart': 'Warenkorb anzeigen',
            'Hide Cart': 'Warenkorb verstecken',
            'Addresses could not be loaded': 'Adressen konnten nicht geladen werden.',

            'Card Holder': 'Karteninhaber',
            'Account Holder': 'Kontoinhaber',
            'Account Holder Email': 'E-mail Adresse',

            'Something is wrong with your payment': 'Bezahlvorgang fehlgeschlagen',
            'We did receive your order, but something is wrong with your payment process.': 'Wir haben Ihre Bestellung erhalten, jedoch ist etwas beim Bezahlvorgang schief gelaufen.',
            'Please try a different payment method, or contact our customer service via email or hotline.': 'Bitte versuchen Sie eine andere Bezahlmethode oder kontaktieren Sie unseren Kundenservice per E-Mail oder Telefon.',
            'Pay': 'Bezahlen',
            'Quit guest session': 'Gastsitzung beenden'
        });
    });
};
