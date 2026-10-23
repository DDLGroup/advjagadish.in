export function downloadVCard(lawyer) {
  const vcardContent = `BEGIN:VCARD
VERSION:3.0
N:Halder;Jagadish;Chandra;;Adv.
FN:Advocate Jagadish Chandra Halder
ORG:High Court, Calcutta;Bar Association Room No. 15 (2nd Floor)
TITLE:Advocate, High Court at Calcutta
TEL;TYPE=CELL,VOICE,PREF:+919830243096
EMAIL;TYPE=INTERNET,PREF:jagadish123halder@gmail.com
ADR;TYPE=WORK,POSTAL,PARCEL:;;Bar Association Room No. 15 (2nd Floor), High Court;Calcutta;West Bengal;700001;India
ADR;TYPE=HOME:;;Garia, Nabagram, Jhil Road;Kolkata;West Bengal;700152;India
ADR;TYPE=WORK:;;Kakdwip New Market (Near Kakdwip Court);Kakdwip;West Bengal;743347;India
URL:https://advjagadish.in
NOTE:Civil Advocate, High Court Calcutta. Chambers at High Court Room 15, Garia, and Kakdwip.
END:VCARD`;

  const blob = new Blob([vcardContent], { type: 'text/vcard;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Advocate_Jagadish_Chandra_Halder.vcf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
