---
sidebar_position: 5
---

# Expert Control#

According to the regulations on work execution [Chapter 13](https://lovdata.no/dokument/SF/forskrift/2011-12-06-1357/KAPITTEL_3-4#%C2%A713-4), various types of work equipment must undergo an annual inspection to ensure it is safe to use.

With DigiQuip, Equipment owners get a simple and efficient way to conduct and manage expert inspections, ensuring their equipment are safe to use and comply with current legal requirements.

:::note[Why is this important?]
- Safety: The purpose of expert inspections is to ensure that machines and equipment are safe to use. Identifying and correcting faults or deficiencies can prevent accidents and contribute to a safer work environment.
- Regulatory compliance: The Norwegian Labour Inspection Authority requires certain types of work equipment to undergo expert inspections. DigiQuip helps ensure all regulations are met, and that documentation is easily accessible for inspections by authorities.
- Efficiency: DigiQuip simplifies the process of conducting inspections, recording deviations, and planning future inspections, saving time and resources.


:::

 
import startinspection from '/img/workequipment/Startinspection.png';

<img src={startinspection} style={{ float: 'right', width: 250, marginLeft: 20 }} />

### Conduct an expert inspection:

- To start an inspection, scan the QR code on the equipment.
- Select **"Start Inspection"**.
- Add **If** deviations and add comments
- Ensure that the **"Last Inspection"** and **"Next Inspection"** dates are correct.
- Add the houre counter **(Mandatory)**.
- Select **Use recommended** (YES/NO).
<font color="red">Note!</font> **Use recommended** is set to (NO) by default.
- **Complete** the inspection.


### Start post-inspection:

If deviations were recorded during the inspection, you can conduct a follow-up inspection on the same inspection.

import deviationcheck from '/img/workequipment/deviationcheck.png';

<img src={deviationcheck} style={{ float: 'right', width: 250, marginLeft: 20 }} /> 


- **Scan the QR code** on the equipment.
- The button that previously said **"Start Inspection"** will now change to **"Start Follow-Up Inspection"**.*
- The follow-up inspection button is available for 8 months from the last inspection.
- You can add new photos.
- You can add comments.
<font color="red">Note!</font> Do not delete previous photos and comments.


## Manage and plan equipment inspections

- Get a complete overview of all registered equipment with expert inspections on the **inspection page**.
- **Filter by date** (e.g., upcoming inspections) and view due dates.
- Click on the equipment to access the expert inspection tab.
- **Export to Excel** for sorting, department distribution, inspectors, or audit reporting.
- Export a list of equipment with **deviations**. This list updates when deviations are corrected.
 
import controlpage from '/img/workequipment/controlpage.png';

<img src={controlpage} style={{width:900}} />
  

   
# FAQ
Here are some answers to frequently asked questions. Contact us if you don't find the answer you're looking for!

<details>
  <summary>I scanned the QR code but don't see the "Start Inspection" button. Why?</summary>
  <div>
    <div>This could be due to:</div>
    <div>You do not have the inspector role → Contact the administrator.</div>
    <div>No checklist is linked to the equipment → Contact the administrator.</div>
  </div>
</details>

<details>
  <summary>Can I edit a completed inspection if I forgot to change the date/recommended use?</summary>
  <div>
    <div>Yes, follow these steps:</div>
    <div>Go to Admin → Machines and Equipment → Select equipment → Go to the Expert Inspection tab.</div>
    <div>Find the inspection that needs editing.</div>
    <div>Click on the three dots (⋮) on the right.</div>
    <div>Select "Unlock".</div>
    <div>Then select "Edit" to make changes.</div>
  </div>
</details>

<details>
  <summary>Can I start an inspection and save it to continue later?</summary>
  <div>
    <div>Yes, it is possible!</div>
    <div>Use the "Save and Exit" button on the last page of the checklist. Alternatively, you can just leave the page – the inspection is saved automatically.</div>
    <div>We recommend turning off "Pre-filled with OK" in the checklist.</div>
  </div>
</details>

<details>
  <summary>Why can't I link a checklist to a model?</summary>
  <div>
    <div>This could be due to:</div>
    <div>Missing permissions → You must have an administrator role to link checklists.</div>
    <div>No checklists available** → Check that checklists have been created in the system.</div>
  </div>
</details>

<details>
  <summary>How do I change a checklist linked to a model?</summary>
  <div>
    <div>Yes, it is possible!</div>
    <div>Use the "Save and Exit" button on the last page of the checklist. Alternatively, you can just leave the page – the checklist is saved automatically.</div>
    <div>We recommend turning off "Pre-filled with OK" in the checklist.</div>
  </div>
</details>

<details>
  <summary>Can I edit a completed inspection if I forgot to change the date/recommended use?</summary>
  <div>
    <div>Yes, follow these steps:</div>
    <div>Go to Admin → Machines and Equipment → Select equipment → Go to the Expert Inspection tab.</div>
    <div>Find the inspection that needs editing.</div>
    <div>Click on the three dots (⋮) on the right.</div>
    <div>Select "Unlock".</div>
    <div>Then select "Edit" to make changes.</div>
  </div>
</details>


In DigiQuip, Equipemnt owners have control over expert inspections, and we are integrated with both the Machine Register (M-reg.) and BRAREG.

To retrieve inspection data from M-reg., contact the Central Register at post@sentralregisteret.no to obtain API details. These details can be entered directly under Settings > General > Integrations or sent to us via email.

We also offer customized integrations upon agreement.

For further details or questions, contact your representative or book a meeting with our team, [book a meeting](https://digiquip.no/about).
