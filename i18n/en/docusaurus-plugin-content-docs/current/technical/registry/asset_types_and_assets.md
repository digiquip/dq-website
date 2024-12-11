---
sidebar_position: 5
---

# Asset Types and Assets

**Assets** in the Registry refers to physical objects with which a person would interact. In most cases this would be a exact piece of equipment with its own unique serial or identification number unique that single piece of equipment. Assets are only differentiated by the serial number of the asset. The level of specificity above the asset is the **Asset Type**.

**Asset Types** are the specific type of the asset. It consists of the brand, model, and if relevant the version of the asset.

The main information that is required for an asset type and asset are:

- **Asset Type**:
  - **Brand**: The brand of the asset.
  - **Model**: The model number of the asset.
- **Asset**:
  - **Serial Number**: The serial number of the asset.

There is more information that can be added to the asset type and asset, but these are the main things that are required.

In order to add an **Asset** to the registry, you must first add an **Asset Type**.

**NOTE:** Both Assets and Asset Types can have external identifiers added onto them. This is useful for linking the assets and asset types to your external system. Please see the [External Identifiers](./identifiers.md) section for more information.

## Asset Types

An organization in the Registry can contain the following information:

| Content               | Field Name              | Mandatory | Description                                                                                                                                                                       |
|:----------------------|:------------------------|:----------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Brand                 | `brand`                 | YES       | The brand of the asset type                                                                                                                                                       |
| Model                 | `model`                 | YES       | The model number or string of the asset type                                                                                                                                      |
| Version               | `version`               | NO        | The potential version of the model                                                                                                                                                |
| Emission Class        | `emission_class`        | NO        | The potential emission class of the asset type, avoid populating data in this field                                                                                               |
| Documents             | `documents`             | NO        | A list of *document* objects associated with the asset type.                                                                                                                      |
| Thumbnail Document    | `thumbnail`             | NO        | A thumbnail image, as a *document* object, that can be added to the asset type that will visualize the asset type in our system, unless agreed upon this field can be disregarded |
| Thumbnail Document Id | `thumbnail_document_id` | NO        | An ID referring to the *document* of type `image` that is desired to be used as a thumbnail for the asset type in our system, unless agreed upon this field can be disregarded    |


The regular CRUD operations are avaible for asset types. In addition to this there is a `GET /asset_types/by_brand_and_model` endpoint that allows you to search for asset types by brand, model, and the version number. In addition there are endpoints for adding general documents to the asset types and the thumbnail to the asset type.

Please refer to the Swagger documentation for more specific information:
* For testing: https://test-registry.kvipp.io/asset_types ([Swagger documentation at /docs/asset_types](https://test-registry.kvipp.io/docs#/asset_types))
* Live: https://registry.kvipp.io/asset_types ( [Swagger documentation at /docs/asset_types](https://registry.kvipp.io/docs#/asset_types))

## Assets

After the asset type has been added to the registry, you can then add an asset. The asset is the specific instance of the asset type. The asset is differentiated by the serial number of the asset.

An asset in the Registry can contain the following information:

| Content            | Field Name              | Mandatory | Description                                                                 |
|:-------------------|:------------------------|:----------|:----------------------------------------------------------------------------|
| Serial Number      | `serial_number`         | YES       | The serial number of the asset                                              |
| Asset Type ID      | `asset_type_id`         | YES       | The ID of the asset type of the asset                                       |
| Production Year    | `production_year`       | NO        | The year the asset was produced as a 4 digit number                         |
| Status             | `status`                | NO        | A string containing the status of the equipment in any format desired       |
| Responsible Person | `responsible_person_id` | NO        | The interal Registry id of the responsible person of the asset, if relevant |


The regular CRUD operations are avaible for assets. In addition to this there is a `POST /assets/find` endpoint that allows you to search for assets by:

 - serial number
 - brand
 - model
 - version

If the query parameter `create` is set to `true` and the asset is not found in the database, the asset will be created.

Please refer to the Swagger documentation for more specific information:
* For testing: https://test-registry.kvipp.io/assets ([Swagger documentation at /docs/assets](https://test-registry.kvipp.io/docs#/assets))
* Live: https://registry.kvipp.io/assets ( [Swagger documentation at /docs/assets](https://registry.kvipp.io/docs#/assets))


## Example: Adding an Asset Type and Asset

Let us assume that an external company has a piece of equipment **Manitou TJ280** with a specific serial number and wants to add it to the registry.

**Asset and Asset Type Information**

| Name            | Content      |
|:----------------|:-------------|
| Brand           | Manitou      |
| Model           | TJ280        |
| Version         | 5            |
| Serial Number   | TJ280M123456 |
| Production Year | 2015         |

### Creating the Asset Type

The first step is to create the asset type for the Manitou TJ280. Firstly, check if the asset type already exists in the registr via `GET /asset_types/`. If not, creatng the asset type can be done by the `POST /asset_types` endpoint with the following JSON body:

```json
{
  "brand": "Manitou",
  "model": "TJ280",
  "version": "5",
}
```

Once the asset type has been created, the asset can be added to the registry. Make note of the `id` of the asset type that was created. For this example, let's assume response returned was the following with the following UUID ID:

```json
{
    "id": "f1b3b3b3-3b3b-3b3b-3b3b-3b3b3b3b3b3b",
    "brand": "Manitou",
    "model": "TJ280",
    "version": "5",
    ...
}
```

### Creating the Asset

The asset can be added to the registry by the `POST /assets` endpoint with the following JSON body:

```json
{
  "serial_number": "TJ280M123456",
  "production_year": 2015,
  "asset_type_id": "f1b3b3b3-3b3b-3b3b-3b3b-3b3b3b3b3b3b",
}
```

Once the asset has been created, make note of the `id` of the asset that was created. For this example, let's assume response returned was the following with the following UUID ID:

```json
{
    "id": "e7ffc125-18cf-46c0-852d-955fbfe733fb",
    "serial_number": "TJ280M123456",
    "production_year": 2015,
    "asset_type_id": "f1b3b3b3-3b3b-3b3b-3b3b-3b3b3b3b3b3b",
    ...
}
```
