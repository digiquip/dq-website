---
sidebar_position: 3
---

# External Identifiers

External identifiers are a method that allows other systems to store their ID for an object, e.g., a person, in the registry. Since all objects in the registry already have an ID, this might seem counterproductive, but considering that data and data quality are continuously improving in the registry, this provides an opportunity to maintain a consistent link to occasionally changing data.

## What can they refer to?

External identifiers are "polymorphic." This means they can point to different categories of data. In our case, this can be:

Person
Asset Type
Asset

## Example

Let’s say you have a system we call "xyz." In this system, the person "Ola Normann" has the ID "xyz123." Ola Normann is also registered in the Registry, with the ID "5574043f-4fc1-48d2-82a6-7dcf73418390." An entry in "Identifiers" could therefore be:

```
{
    "source": "xyz",
    "identity": "xyz123",
    "foreign_id": "5574043f-4fc1-48d2-82a6-7dcf73418390",
    "type": "person"
}
```

Once this is registered, you can query this identity in the registry and retrieve the person and all related data in one query, without needing to track what ID the person has or whether there has been a merge or update of the data.

## Example 2: Find or create an asset and link an identifier to it

If you have data for the brand, model, and potentially a version number and a serial number, you can send a POST request to the endpoint https://registry.kvipp.io/assets/find with the following example data as JSON:

```
{
  "serial_number": "MAN000Q0E01000330",
  "brand": "Manitou",
  "model": "280 TJ"
}
```

If this asset exists, you will receive the object in return. If not, and if you have set the create parameter to true, both the asset type and the asset will be created and returned to you. If it exists, you should check for an external identifier; if not, you can create one with the ID you received from the previous call, e.g.:

```
{
    "source": "system_x",
    "identity": "ID8812313",
    "foreign_id": "6dd19106-3708-4fea-becc-45ae3c001a4f",
    "type": "asset"
}
```

## Link a DigiQuip QR code to an asset or asset type

On the QR code, there is a seven-character alphanumeric combination (e.g., "PYZEV1Q"). If you want to link this to an asset with ID 22934840-6214-4b84-bfde-7b239c6d2e33, the identifier you should create (if it doesn't already exist) would be:

```
{
    "source": "digiquip_qr",
    "identity": "PYZEV1Q",
    "foreign_id": "22934840-6214-4b84-bfde-7b239c6d2e33",
    "type": "asset"
}
```

**Check first if the identifier already exists!**
