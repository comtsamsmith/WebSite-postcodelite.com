export type Section = { heading: string; body?: string[]; bullets?: string[]; code?: string };
export type Page = { path: string; title: string; eyebrow?: string; intro: string; sections: Section[] };

const docs = (path: string, title: string, intro: string, sections: Section[]): Page => ({ path, title, eyebrow: 'Developer documentation', intro, sections });

export const pages: Page[] = [
  { path: 'default.htm', title: 'Postcode lookup that fits the way you work', eyebrow: 'Royal Mail PAF data · updated monthly', intro: 'A cost-effective postcode software solution for office teams, application developers and web designers — available online around the clock or from data installed locally.', sections: [
    { heading: 'Why Postcode Lite?', body: ['Reliable address lookup reduces repetitive typing, improves the quality of customer data and helps goods reach the right place.'], bullets: ['Reduce keystrokes by up to 80%', 'Improve company professionalism', 'Reduce addressing and spelling errors', 'Save time and control costs', 'Help reduce card fraud'] },
    { heading: 'One service, three ways to use it', body: ['Use the Windows desktop application, integrate with an existing application through the SDK, or add postcode lookup to a website. Data on the Postcode Lite server receives Royal Mail updates every month.'] },
    { heading: 'Start with a 30-day evaluation', body: ['Create an online account and receive a data key. New accounts can access one postcode area for 30 days, with no commitment.'] }
  ]},
  { path: 'DesktopSoftware.htm', title: 'Desktop postcode software', eyebrow: 'Fast address lookup for Windows', intro: 'Install Postcode Lite on one PC or a shared network drive and start finding addresses in seconds.', sections: [
    { heading: 'Internet version', body: ['Download and run the installer on a local PC or shared network drive. The application uses our web data server by default, so monthly updates are applied automatically.', 'A new account includes access to one postcode area for 30 days. A paid licence unlocks all postcode areas.'] },
    { heading: 'Local data', body: ['For environments without internet access, download encrypted premises-level or street-level data and install the desktop client on each PC.', 'Local data customers are notified when updated files are available.'] },
    { heading: 'Shared network installation', body: ['Install the main application to the network, then run ClientInstall.exe on each PC to create a desktop shortcut.'] }
  ]},
  { path: 'SDK.htm', title: 'Programmer SDK', eyebrow: 'Address lookup for Windows applications', intro: 'Add premises, street and geographic postcode data to Windows applications using a compact COM/ActiveX interface.', sections: [
    { heading: 'Built for straightforward integration', body: ['A single COM object call can display a premises-level search window and return the selected full address. The SDK can use data from our online server or encrypted local data files.'] },
    { heading: 'Documentation', bullets: ['SDK basics', 'Street-level addresses', 'Premises-level addresses', 'Built-in search interface', 'Distance, longitude and latitude'] },
    { heading: 'Downloads', body: ['Install the client component for internet access, or combine it with encrypted premises, street or PostZon data for local use. Example projects are available for Visual Basic, VB.NET and Microsoft Access.'] }
  ]},
  { path: 'WebIntegration.htm', title: 'Postcode lookup for the web', eyebrow: 'AJAX and HTTP/XML integration', intro: 'Add address search to checkout, registration and internal web forms without rebuilding the experience around it.', sections: [
    { heading: 'Street address AJAX', body: ['A lightweight lookup fills street-level address fields while keeping the design and flow of your form.'] },
    { heading: 'Premises address AJAX', body: ['Show a list of complete delivery addresses for the visitor to select, then populate the form automatically.'] },
    { heading: 'HTTP/XML web service', body: ['Call premises, street and geographic data from almost any server-side programming language using a simple XML interface.'] }
  ]},
  { path: 'Purchase.htm', title: 'How to purchase', eyebrow: 'Simple online licensing', intro: 'Create an account, choose the licences or lookup credits you need, and activate access online.', sections: [
    { heading: 'Purchase in your account', body: ['After creating an online account, choose “Buy licences / lookup credits” and select the package that matches your use.'] },
    { heading: 'Payment and activation', body: ['Complete payment online. Internet-based access is activated automatically after payment.'] },
    { heading: 'Office and public web use', body: ['Universal credit packs can be used for office or public website lookup. See the terms and FAQ for licensing details.'] }
  ]},
  { path: 'Prices.htm', title: 'Postcode Lite prices', eyebrow: 'Straightforward annual pricing', intro: 'Choose street, premises or geographic data, licensed for named users or paid lookup credits.', sections: [
    { heading: 'For use in the office', bullets: ['Street level — £161 per user, per year', 'Premises address level — £291 per user, per year', 'PostZon geographic data — £161 per user, per year'], body: ['Prices shown apply to 1–30 users. Contact us for larger teams.'] },
    { heading: 'For office or public website use', bullets: ['5,000 street-level credits — £239 per year', '2,500 premises-level credits — £140 per year', '2,500 PostZon credits — £140 per year'], body: ['Credit packs last 12 months and may be combined for larger volumes. All prices exclude VAT.'] },
    { heading: 'What each data level returns', body: ['Street data returns the main address and leaves the building name or number to the user. Premises data returns a selectable list of complete addresses. PostZon supplies coordinates and distance calculations.'] }
  ]},
  { path: 'FAQ.htm', title: 'Frequently asked questions', intro: 'Answers about integration, licences, payment and data updates.', sections: [
    { heading: 'Do you provide a web service?', body: ['Yes. The HTTP/XML service works with most server-side languages, and sample code is available for Visual Basic, ASP.NET, VB.NET and PHP.'] },
    { heading: 'Can desktop software work with other applications?', body: ['Postcode Lite copies an address to the clipboard. The professional version can also place address data into fields in supported applications.'] },
    { heading: 'How do I pay and when is access active?', body: ['Licences are purchased online. Internet access becomes active as soon as payment is complete.'] },
    { heading: 'How often is data updated?', body: ['Online data is updated monthly. Local data files are updated every four months, with an email sent when downloads are ready.'] },
    { heading: 'Can one user licence be used on a public website?', body: ['No. Public website use requires the appropriate universal credit pack. Internal use requires a licence for each user.'] }
  ]},
  { path: 'contact.htm', title: 'Support at Postcode Lite', eyebrow: 'Tell us what you need', intro: 'For the fastest support, send a clear description of the issue and include the details that help us find your account.', sections: [
    { heading: 'What to include', bullets: ['Your licence ID', 'A clear description of the issue', 'Whether one computer or every computer is affected', 'Your name and preferred contact details if you would like a reply'] },
    { heading: 'Remote support', body: ['When needed, the support team may ask you to download the Postcode Lite remote support program. Only run it when instructed by the support team.'] }
  ]},
  { path: 'privacy-policy.htm', title: 'Privacy policy', eyebrow: 'Effective 1 July 2012', intro: 'This policy explains how Comtek Accounts Ltd, trading as Postcode Lite, uses and protects information supplied through this website.', sections: [
    { heading: 'Information we collect', body: ['Account records may include a name, job title, email address, billing address and other information needed to provide and support the service. Payment card details are not stored by Postcode Lite.'] },
    { heading: 'How information is used', bullets: ['Provide and support postcode lookup services', 'Maintain business and billing records', 'Improve products and services', 'Send service, renewal and occasional product information', 'Meet Royal Mail licensing obligations'] },
    { heading: 'Cookies and analytics', body: ['The site may use analytics, advertising and social services that store cookies or anonymous usage information. Browser controls and provider opt-out tools can be used to manage these.'] },
    { heading: 'Security and retention', body: ['Physical, electronic and managerial safeguards are used to protect customer information. Account and billing records are retained only as required to provide services and meet legal obligations.'] },
    { heading: 'Your rights', body: ['You can request access to the information held about you, ask for incorrect data to be corrected, or request deletion where applicable. Security incidents are handled in line with UK data-protection requirements.'] }
  ]},
  { path: 'Terms.htm', title: 'End user licence agreement', eyebrow: 'Postcode Lite service terms', intro: 'By opening an account, customers enter into an agreement with Comtek Accounts Limited for use of Postcode Lite software, data and lookup services.', sections: [
    { heading: 'Service and permitted use', body: ['Postcode Lite grants a non-exclusive right to use the lookup service for the licence period. Data may be used for individual address and postcode searches or mapping as permitted by the selected licence.', 'Customers must not copy, publish, sell, lease, extract or redistribute delivery-point data or the lookup service.'] },
    { heading: 'Licences and credits', body: ['Universal credit packs, external-use licences and internal user licences are valid for the stated period. Public and internal use have different requirements; customers are responsible for selecting the correct licence.'] },
    { heading: 'Software', body: ['Software may be downloaded and copied as needed for authorised users. It must not be decompiled, modified, sublicensed, rented or leased.'] },
    { heading: 'Security and availability', body: ['Customers are responsible for account credentials and must report suspected unauthorised use. The provider uses reasonable endeavours to maintain service availability and apply regular database updates.'] },
    { heading: 'Termination, liability and law', body: ['Access may be suspended for breach, abnormal usage or overdue payment. Liability is limited as described in the full agreement. The agreement is governed by English law.'] },
    { heading: 'Important notice', body: ['This page is a modern presentation of the current published terms. For legal decisions, retain and review the complete agreement supplied with your account.'] }
  ]},
  docs('Software/SDK_basics.htm', 'SDK basics', 'Create and manage the Postcode Lite COM object from a Windows application.', [
    { heading: 'Create an instance', body: ['Use late binding with CreateObject("IPostCodeLite.PostCode"), or add a reference to IPostCodeLite for early binding. Release the object when finished.'], code: 'Dim PostCodeLite As Object\nSet PostCodeLite = CreateObject("IPostCodeLite.PostCode")\n\' … use the SDK …\nSet PostCodeLite = Nothing' },
    { heading: 'Utility functions', bullets: ['GetVersion — returns the COM object version', 'GetLicenseInfo — returns licence status', 'FormatPostCode — formats a UK postcode', 'GetDistance — calculates distance between two coordinates', 'DisplayWebPage and GetDataFromHTTPRequest — browser and HTTP helpers'] }
  ]),
  docs('Software/SDK_Street.htm', 'SDK: street-level address', 'Retrieve a street-level address and prompt the user for the building name or number.', [
    { heading: 'Method', code: 'GetStreetAddress(Postcode, DataKey, Location, Parms) As Boolean', body: ['Supply a postcode and either an online data key or local-data location. On success, read the address properties from the PostcodeLite object.'] },
    { heading: 'Returned properties', bullets: ['Address_Line1, Address_Line2 and Address_Line3', 'Address_Town and Address_County', 'Address_Postcode and Address_Country', 'General_errormessage and General_credits_display_text'] }
  ]),
  docs('Software/SDK_Full.htm', 'SDK: premises-level address', 'Use a two-stage lookup to show matching delivery points and retrieve the selected full address.', [
    { heading: 'Stage 1: list matches', body: ['Call GetFullAddressToList, then repeatedly call GetFullAddressLineForSelection to populate your selection control. Keep the SDK object alive.'] },
    { heading: 'Stage 2: retrieve the record', body: ['Pass the selected zero-based index to GetFullAddressRecord, then read the organisation and formatted address fields.'], code: 'GetFullAddressRecord(SelectedListIndex) As Boolean' }
  ]),
  docs('Software/SDK_FullDiag.htm', 'SDK: built-in premises search', 'Display the Postcode Lite search dialogue and receive the selected complete address.', [
    { heading: 'One-call search', code: 'SearchForFullAddressWithDialogue(Postcode, Caption, ShowLicenceDetails, AllowManageAccount, DisplayErrors, DataKeyOrLocation, Parms) As Boolean', body: ['Prime the search with a postcode or leave it blank. Choose whether to show licence status, account controls and error messages.'] }
  ]),
  docs('Software/SDK_Long.htm', 'SDK: distance and coordinates', 'Retrieve longitude, latitude and distance from a postcode.', [
    { heading: 'Method', code: 'GetPostZonAddress(Postcode, DataKey, Location, HomePostcode, Parms) As Boolean', body: ['Supply an optional home postcode to receive a distance in kilometres alongside WGS84 longitude and latitude.'] },
    { heading: 'Returned properties', bullets: ['PostZon_Longitude_wgs84', 'PostZon_Latitude_wgs84', 'PostZon_DistanceToHomePostcode', 'PostZon_OSreference', 'Address_Postcode'] }
  ]),
  docs('Software/AjaxASPstreet/AJAXStreet.htm', 'AJAX street-level lookup', 'Add an inline street-address lookup to an existing web form.', [
    { heading: 'Available examples', bullets: ['PHP', 'Classic ASP', 'ASP.NET'] },
    { heading: 'How it behaves', body: ['AJAX retrieves data without a full page refresh. The user supplies a building name or number while the service fills the remaining street address fields.'] }
  ]),
  docs('Software/AjaxASPFull/AJAXFull.htm', 'AJAX premises-level lookup', 'Show matching addresses inline and populate the selected complete delivery address.', [
    { heading: 'Available examples', bullets: ['PHP', 'Classic ASP', 'ASP.NET'] },
    { heading: 'How it behaves', body: ['A lightweight relay on your server protects the data key. JavaScript renders the address list, then fills your form after the visitor chooses a result.'] }
  ]),
  docs('Software/HTTPXML.htm', 'HTTP/XML web service', 'Access premises, street and geographic data from almost any server-side language.', [
    { heading: 'Documentation', bullets: ['HTTP/XML basics', 'Street-level lookup', 'Premises-level lookup', 'Distance, longitude and latitude'] },
    { heading: 'Response format', body: ['Requests use simple URL parameters and return structured XML containing account status, errors and address or geographic records.'] }
  ]),
  docs('Software/HTTP_basics.htm', 'HTTP/XML basics', 'Call a URL with your parameters and process the XML response in any XML-capable language.', [
    { heading: 'Before you begin', body: ['Create an online account to receive a data key. New accounts receive access to one postcode area for a 30-day evaluation.'] }
  ]),
  docs('Software/HTTP_Street.htm', 'HTTP/XML: street-level address', 'Retrieve a street or thoroughfare address for a postcode.', [
    { heading: 'Endpoint', code: 'XMLService/XMLSearchForThoroughfareAddress.aspx?datakey=…&postcode=…&username=…' },
    { heading: 'Response', body: ['The XML response includes status and error fields plus line1, line2, line3, town, county, postcode, country and supporting address data.'] }
  ]),
  docs('Software/HTTP_Full.htm', 'HTTP/XML: premises-level address', 'List delivery points for a postcode, then retrieve the selected full record.', [
    { heading: 'Search', code: 'XMLService/XMLSearchForAddress.aspx?datakey=…&postcode=…&username=…', body: ['The response contains display lines and record IDs.'] },
    { heading: 'Retrieve', code: 'XMLService/XMLGetAddressRecord.aspx?datakey=…&id=…&username=…', body: ['The second response contains the organisation and complete formatted address.'] }
  ]),
  docs('Software/HTTP_Long.htm', 'HTTP/XML: distance and coordinates', 'Retrieve WGS84 coordinates, OS reference and optional distance from a home postcode.', [
    { heading: 'Endpoint', code: 'XMLService/XMLSearchForPostZonData.aspx?datakey=…&postcode=…&username=…&homepostcode=…' },
    { heading: 'Response', bullets: ['Latitude and longitude', 'OS reference', 'Distance to home postcode in kilometres', 'Formatted postcode and account status'] }
  ])
];

const ajaxVariants = [
  ['Software/AjaxASPstreet/AJAXStreet_PHP.htm', 'PHP: AJAX street-level', 'PHP', 'SPLGetStreetAddress.php'],
  ['Software/AjaxASPstreet/AJAXStreet_ASP.htm', 'Classic ASP: AJAX street-level', 'Classic ASP', 'SPLGetStreetAddress.asp'],
  ['Software/AjaxASPstreet/AJAXStreet_NET.htm', '.NET: AJAX street-level', 'ASP.NET', 'SPLGetStreetAddress.aspx'],
  ['Software/AjaxASPFull/AJAXFull_PHP.htm', 'PHP: AJAX premises-level', 'PHP', 'SPLGetFullAddressStep1.php and SPLGetFullAddressStep2.php'],
  ['Software/AjaxASPFull/AJAXFull_ASP.htm', 'Classic ASP: AJAX premises-level', 'Classic ASP', 'SPLGetFullAddressStep1.asp and SPLGetFullAddressStep2.asp'],
  ['Software/AjaxASPFull/AJAXFull_NET.htm', '.NET: AJAX premises-level', 'ASP.NET', 'SPLGetFullAddress1.aspx and SPLGetFullAddress2.aspx']
] as const;

for (const [path, title, platform, relay] of ajaxVariants) {
  const premises = path.includes('AjaxASPFull');
  pages.push(docs(path, title, `Integrate ${premises ? 'complete premises' : 'street-level'} postcode lookup into a ${platform} website.`, [
    { heading: 'Requirements', body: [`A web server capable of running ${platform}. The browser-side experience uses standard JavaScript and does not require a full page refresh.`] },
    { heading: 'Integration steps', bullets: ['Download and copy the example files', 'Reference the supplied JavaScript', 'Add a lookup link or button', ...(premises ? ['Add the inline address-selection area'] : []), 'Map the returned address fields', 'Add your data key to the server-side relay'] },
    { heading: 'Server-side relay', body: [`The supplied ${relay} file sends requests to Postcode Lite without exposing your data key to the visitor’s browser.`] },
    { heading: 'Address field mapping', code: 'document.getElementById("line1").value = LINE1;\ndocument.getElementById("town").value = TOWN;\ndocument.getElementById("county").value = COUNTY;\ndocument.getElementById("postcode").value = POSTCODE;' }
  ]));
}

export const homePage = pages[0];
export const pageByPath = new Map(pages.map((page) => [page.path, page]));
