---
sidebar_position: 6
---

# Actions and Action Documents

In the Registry database the concept of **actions** are things that can be performed on assets. The main categories currently established are the following:

- Expert Control
- Maintenance
- Pre-use Inspection
- Repair

These *actions* can have possible documents associated with them. These documents can be of any type and can be linked to the action. The *action* and the *document* must be created in the Registry before linking the two together, via an *action document*. The *action document* is simply a linking between the two object via a pivot table.

In some cases the action can both contain data and metadata in for form of structured data. In the Registry they can be stored as JSON data. The data field is intended to contain the main content of the action, while the meta_data field is intended to contain any potential metadata. If you have data, and possibly metadata, in addtion to a document associated with the action it is encouraged to both post the structured data in the action itself and the document in the Registry. The data is stored as a field with the action and the document can be linked via Action Documents.


## Actions

The fields that are available for the action are described in the *Data Structure Walkthrough* below. The actions are created by performing a `POST /actions` request to the Registry API. The regular CRUD operations are present for the actions.

The action object has two fields that can be used to link the action in the Registry to the external source system. These are the `source_system` and `source_reference` and can be seen in the *Data Structure Walkthrough* below.


## Data Structure Walkthrough

The following is the schema for an action with associated description of each field:


| **Field**                   | **Description**                                                                                                                                                                                                      |
|-----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`                        | Internal UUID identifier of the action within the Registry Database.                                                                                                                                                 |
| `created_at`                | Time the action was created.                                                                                                                                                                                         |
| `created_by`                | Logto Identifier of the user who created the action.                                                                                                                                                                 |
| `updated_at`                | Time the action was last updated.                                                                                                                                                                                    |
| `updated_by`                | Logto Identifier of the user who last updated the action.                                                                                                                                                            |
| `person_id`                 | Internal Registry ID of the person who created the action.                                                                                                                                                           |
| `performed_by_person`       | String containing the name of the person who performed the action.                                                                                                                                                   |
| `organization_id`           | Internal Registry ID of the organization who performed the action.                                                                                                                                                   |
| `performed_by_organization` | String containing the name of the organization who performed the action.                                                                                                                                             |
| `asset_id`                  | Internal Registry ID of the asset on which the action was performed.                                                                                                                                                 |
| `performed_at`              | Date on which the action was performed.                                                                                                                                                                              |
| `reference`                 | Reference number associated with the action, for example, a control number (not intended to be database id or similar).                                                                                              |
| `action_type`               | Main type of what action as described above, for example, `expert_control`.                                                                                                                                          |
| `action_subtype`            | String containing further subcategorization of the action in your system. If the `action_type` sufficiently describes the action, the field is encouraged to remain `null`.                                          |
| `status`                    | String containing the terms used in the system that action was performed in.                                                                                                                                         |
| `status_ok`                 | Boolean containing the overall status of the action, for example, if an expert control was approved (`true`) or not approved (`false`).                                                                              |
| `status_use_ok`             | Boolean indicating if the asset can still be used or not independent of the overall action status (`status_ok`). If you do not distinguish between this in your system, please set to the same value as `status_ok`. |
| `status_finalized`          | Boolean indicating if the action is completed or not.                                                                                                                                                                |
| `status_valid_through`      | Date on which the action status is valid until.                                                                                                                                                                      |
| `source_system`             | String indicating the name of the product or system where the information originated. The use of the product name is encouraged.                                                                                     |
| `source_reference`          | String containing the identifier in the source system.                                                                                                                                                               |
| `data`                      | JSON containing the main content related to the action.                                                                                                                                                              |
| `meta_data`                 | JSON containing any potential metadata surrounding the action, but that isn't stored in the `data` object itself.                                                                                                    |

### Required steps before creating an Action

Before posting the action information itself the following information surrounding the action should be created in the Registry in the recommended order.

1. Create the Organization ([see organizations](./organizations))
2. Create the Person (Person who performed the action)
3. Add the Person to the organization
3. Create the Asset Type ([see asset types](./asset_types_and_assets#asset-types))
4. Create the Asset ([see assets](./asset_types_and_assets#assets))
5. Create the Action

It is recommend to fill out as much information as possible to each object created in the Registry. If the required information is missing to create the person and organization in the database then it is possible to add the most basic information to the action via the `performed_by_person`, `performed_by_organization` fields. **Note: The asset and asset type must be created in order to input the action.**


## Action Documents

The fields that are available for the action document are the following:


| Content          | Field Name      | Mandatory | Description                                                                                                                      |
|:-----------------|:----------------|:----------|:---------------------------------------------------------------------------------------------------------------------------------|
| Action ID        | `action_id`     | YES       | Registry ID of the action to associate the document with                                                                         |
| Document ID      | `document_id`   | YES       | Registry ID of the document to associate the action with                                                                         |
| Source System    | `source_system` | YES       | String indicating the name of the product or system where the information originated. The use of the product name is encouraged. |
| Source Reference | `document_id`   | YES       | String containing the identifier in the source (external) system's database                                                      |

The action document is created by performing a `POST /actions/{action_id}/action_documents` request to the Registry API. The regular CRUD operations are present for the action documents except for the GET operation. In order to see the action documents, these can be seen by either performing a `GET /actions/{action_id}` via the `action_documents` field or by performing a `GET /documents/{document_id}` request via the `action_documents` field.


### Required steps before creating an Action Document

1. Create the Action
2. Create Documents associated with the action
3. Create an Action Document

As seen above and previously mentioned, the *action* and the *document* must be created in the Registry before linking the two together.


## Example: Posting an Inspection to Registry

Let us assume that an external company with a equipment inspection product called **Inspecteer** and want to push inspection/control data into Registry as an action.

For this example let us assume that we have the following information:


**Inspection Company Information**:

| Name                          | Content          |
|:------------------------------|:-----------------|
| Company Name                  | Inspections R'Us |
| Registration Number           | 123456785        |
| Tax Identification Number/VAT | NO123456785MVA   |
| Organization Type             | Private Company  |
| Country of Registration       | Norway           |



**Inspection Information**

| Name                                                           | Content                                         |
|:---------------------------------------------------------------|:------------------------------------------------|
| Inspection Tool Product Name                                   | Inspecteer                                      |
| Inspector Name                                                 | John Doe                                        |
| Inspector Date of Birth                                        | 21st of November, 1970                          |
| Inspector Nationality                                          | Norwegian                                       |
| Inspection Type                                                | Yearly Inspection                               |
| Approved or Not                                                | Approved                                        |
| Inspection Date                                                | 15th of December, 2024                          |
| Inspection Valid Until                                         | 15th of December, 2025                          |
| Inspection Reference (id in source system database)            | `67d0c311-4ff8-47f0-b161-45054c3d2c5b`          |
| Inspection Report PDF                                          | `"inspection_report_2024_manitou_john_doe.pdf"` |
| Inspection Report PDF Reference (id in source system database) | `72a7cca8-8733-4596-8ddc-b34ce1e0ac04`          |


Data:
```JSON
{
    "Safety": "The machine was determined to be safe to operate",
    "Needed repairs": "Oil change needed, and customer was informed",
    "Overall outcome": "John Doe approved the machine for usage"
}
```

Meta Data:
```JSON
{
    "Location": "Hakadalsveien 15, 1234 Hakadal",
    "Weather": "Rainy"
}
```


**Asset and Asset Type Information**

| Name            | Content      |
|:----------------|:-------------|
| Brand           | Manitou      |
| Model           | TJ280        |
| Version         | 5            |
| Serial Number   | TJ280M123456 |
| Production Year | 2015         |


### Organization, Person, Asset Type, and Asset Examples

As mentioned above, the organization, person, asset type, and asset should be created before the action is created. The list below refers to examples of how this should be in the correct order.

1. Create the **Inspectors R'Us** Organization [see example](./organizations#creating-the-organization)
2. Create the Inspector **John Doe** (Person) [see example](./organizations#creating-the-person)
3. Add Inspector **John Doe** to the **Inspectors R'Us** organization [see example](./organizations#linking-the-person-to-the-organization)
4. Create the Asset Type **Manitou TJ280** [see example](./asset_types_and_assets#creating-the-asset-type)
5. Create the Asset **Manitou TJ280** with Serial Number **TJ280M123456** [see example](./asset_types_and_assets#creating-the-asset)

The ids in these previous examples will be used in the following example.

### Creating the Action

The action can be added to the registry by the `POST /actions` endpoint with the following JSON body:

```JSON
{
  "person_id": "123e4567-e89b-12d3-a456-426614174000",
  "organization_id": "8c35f400-171a-4928-8fa3-4c647497df27",
  "asset_id": "e7ffc125-18cf-46c0-852d-955fbfe733fb",
  "performed_at": "2024-12-15",
  "reference": "string",
  "action_type": "expert_control",
  "action_subtype": "yearly_inspection",
  "status": "approved",
  "status_ok": true,
  "status_use_ok": true,
  "status_finalized": true,
  "status_valid_through": "2025-12-15",
  "source_system": "inspecteer",
  "source_reference": "67d0c311-4ff8-47f0-b161-45054c3d2c5b",
  "data": {
    "Safety": "The machine was determined to be safe to operate",
    "Needed repairs": "Oil change needed, and customer was informed",
    "Overall outcome": "John Doe approved the machine for usage"
  },
  "meta_data": {
    "Location": "Hakadalsveien 15, 1234 Hakadal",
    "Weather": "Rainy"
  }
}
```


Let us assume that we got a response with containing the following `id` in the response body:

```JSON
{
    "id": "b7aca305-8c8c-41de-90a9-ee392b7645ce",
    "person_id": "123e4567-e89b-12d3-a456-426614174000",
    "organization_id": "8c35f400-171a-4928-8fa3-4c647497df27",
    "asset_id": "e7ffc125-18cf-46c0-852d-955fbfe733fb",
    "performed_at": "2024-12-15",
    ...
}
```

### Creating the Document

The document can be added to the registry by the `POST /documents` endpoint with the following JSON body sent in as form data:

```JSON
{
  "document_type": "expert_control_report",
}
```

Along with form payload in the json above, file `"inspection_report_2024_manitou_john_doe.pdf"` should be sent along in the request as a binary file. Please see the Swagger Schema more detailed information. [see Swagger documentation](https://test-registry.kvipp.io/docs/documents)

Let us assume that we got a response with containing the following `id` in the response body:

```JSON
{
    "id": "4dbc35d4-c075-4da8-a5c0-d9e9ca98c3d2",
    "document_type": "expert_control_report",
    ...
}
```

### Creating the Action Document

The action document can be added to the registry by the `POST /actions/b7aca305-8c8c-41de-90a9-ee392b7645ce/action_documents` endpoint with the following JSON body:

```JSON
{
  "action_id": "b7aca305-8c8c-41de-90a9-ee392b7645ce",
  "document_id": "4dbc35d4-c075-4da8-a5c0-d9e9ca98c3d2",
  "source_system": "inspecteer",
  "source_reference": "72a7cca8-8733-4596-8ddc-b34ce1e0ac04"
}
```

If the above request was successful, the action document has been created and the document is now linked to the action. In order to see the action documents, these can be seen by the following requests:

- `GET /actions/b7aca305-8c8c-41de-90a9-ee392b7645ce` and should be seen in the `action_documents` field
- `GET /documents/4dbc35d4-c075-4da8-a5c0-d9e9ca98c3d2` and should be seen in the `action_documents` field
