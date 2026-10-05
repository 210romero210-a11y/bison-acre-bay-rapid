/**
 * Southern Auto Detailers — appointment requests
 *
 * 1. Create a Google Sheet. Extensions → Apps Script. Replace the default
 *    file with this script. The sheet must stay attached to the script.
 * 2. Project Settings → Script properties → add BOOKING_SECRET
 *    (a long random string). Use the same value as GOOGLE_SCRIPT_SECRET
 *    on the website host.
 * 3. Deploy → New deployment → Web app.
 *    Execute as: Me
 *    Who has access: Anyone
 * 4. Copy the URL that ends in /exec.
 *    Set GOOGLE_SCRIPT_URL to that URL on the website host.
 * 5. Send one test from the site. A row should appear, and
 *    contact@southernautodetailers.com should get the email.
 *    If you change this file, deploy a new version. The old /exec URL
 *    keeps the previous code until you do.
 */
function doPost(e) {
  try {
    var body = JSON.parse(e.postData && e.postData.contents ? e.postData.contents : "{}");
    var secret = PropertiesService.getScriptProperties().getProperty("BOOKING_SECRET");
    if (!secret || body.secret !== secret) {
      return json_({ ok: false, error: "unauthorized" });
    }

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Received",
        "Name",
        "Phone",
        "Email",
        "Vehicle",
        "Service",
        "Preferred date",
        "Notes",
        "Deposit acknowledged",
      ]);
    }
    sheet.appendRow([
      new Date(),
      body.name,
      body.phone,
      body.email,
      body.vehicle,
      body.service,
      body.date,
      body.notes || "",
      "yes",
    ]);

    MailApp.sendEmail({
      to: "contact@southernautodetailers.com",
      replyTo: body.email,
      subject: "Detail request — " + body.name + " — " + body.vehicle,
      body: [
        "New appointment request. This does not hold the slot.",
        "",
        "Name: " + body.name,
        "Phone: " + body.phone,
        "Email: " + body.email,
        "Vehicle: " + body.vehicle,
        "Service: " + body.service,
        "Preferred date: " + body.date,
        "Notes: " + (body.notes || "—"),
        "Deposit box checked: yes",
        "",
        "Quote the vehicle, then collect 20% of that total before you put it on the calendar.",
        "Studio is closed Monday.",
      ].join("\n"),
    });

    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: "script" });
  }
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
