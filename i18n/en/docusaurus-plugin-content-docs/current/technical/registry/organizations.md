---
sidebar_position: 4
---

# Organizations

Organizations in the registry can be any of the following types:

- Private Company
- Public Company (Publicly Traded)
- Non-Profit Organization
- Governmental Organization
- Unclassified


An organization in the Registry can contain the following information:

| Content                          | Field Name                | Mandatory | Description                                                                                 |
|:---------------------------------|:--------------------------|:----------|:--------------------------------------------------------------------------------------------|
| Name of the Organization         | `name`                    | YES       | The name of the organization                                                                |
| Registration Number              | `registration_number`     | YES       | The registration number of the company issued by the country of origin                      |
| Organization Type                | `organization_type`       | YES       | The type of organization mentioned above                                                    |
| Tax Identification Number or VAT | `tax_registration_number` | NO        | The tax or VAT Number of the company issued by the country of origin                        |
| Country                          | `country`                 | NO        | The country where the company is registered                                                 |
| Logto Identification             | `logto_id`                | NO        | This is for internal purposes only, please disregard and avoid including data in this field |


Please refer to the Swagger documentation for more specific information:
* For testing: https://test-registry.kvipp.io/organizaton ([Swagger documentation at /docs/organizations](https://test-registry.kvipp.io/docs#/organizations))
* Live: https://registry.kvipp.io/organizaton ( [Swagger documentation at /docs/organizations](https://registry.kvipp.io/docs#/organizations))


Before creating an organization via a POST request, please ensure that the organization doesn't already exist in the database.


#### People in Organizations

In the registry people can be associated with an organization. A person is created in the registry in the **people** controller. Once created that person can then be linked to an organization by following the path `/people/{person_id}/organizations/{organization_id}`. The endpoints available URL path will allow you to link an already created person and organization together by `relation_type`. See the Swagger docs for more.


## Example: Inspection Company with inspector (Person)

Let us assume that an external company called **Inspections R'Us** has an
inspector called **John Doe**. To add this information the following steps must
be performed:

1. [Create the organization for the inspection company](#creating-the-organization)
2. [Create the person for the inspector](#creating-the-person)
3. [Link the person to the organization](#linking-the-person-to-the-organization)

For this example let us assume that we have the following information:

**Inspection Company Information**:

| Name                          | Content          |
|:------------------------------|:-----------------|
| Company Name                  | Inspections R'Us |
| Registration Number           | 123456785        |
| Tax Identification Number/VAT | NO123456785MVA   |
| Organization Type             | Private Company  |
| Country of Registration       | Norway           |


**Person Information**

| Name                                 | Content                                                                                                                                                                                            |
|:-------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Inspector Name                       | John Doe                                                                                                                                                                                           |
| Inspector Date of Birth              | 21st of November, 1970                                                                                                                                                                             |
| Inspector Nationality                | Norwegian                                                                                                                                                                             |



### Creating the Organization

The endpoint calling `GET /organizations/` will produce the list of organization already in the database. Alternatively, there is a `POST /organization/find/` endpoint that will allow you to search for the organization by inputing the `registration_number` and the `country`. If you cannot find one for the inspection company then it should be created. This can be done with the `POST /organizations/` with the following request body. Please see the Swagger Schema for what are required fields.

```JSON
{
  "name": "Inspections R'Us",
  "registration_number": "123456785",
  "tax_identification_number": "NO123456785MVA",
  "organization_type": "private",
  "country": "no",
}
```

Once the organization is created, make note to store the `id` of the organization in Registry.

For this example let's assume that the organization recieved the following UUID ID, seen in the response body:

```JSON
{
  "id": "8c35f400-171a-4928-8fa3-4c647497df27",
  "name": "Inspections R'Us",
  "registration_number": "123456785",
  "tax_identification_number": "NO123456785MVA",
  "organization_type": "private",
  "country": "no",
  ...
}
```

### Creating the Person

The person might already exist in the database. To check this the `GET /people/` endpoint can either be called and the output can be searched to find the person. Alternatively, the `POST /people/find/` endpoint can be used by searching with the following information:

- `first_name`
- `last_name`
- `date_of_birth`

For conveinence there is a boolean query parameter on this endpoint called `create` that will create the person if it does not exist in the database.

Thus, to find or create the person in the database then the `POST /people/find?create=true` person can create the person with the following request:

```JSON
{
  "first_name": "John",
  "last_name": "Doe",
  "date_of_birth": "1970-11-21",
}
```

Once the person is created, make note to store the `id` of the person in Registry.
For this example, let us assume that the person has the following UUID ID:

```JSON
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "first_name": "John",
  "last_name": "Doe",
  "date_of_birth": "1970-11-21",
  ...
}
```

### Linking the Person to the Organization

The person can be linked to the organization by calling the `POST
/people/{person_id}/organizations/{organization_id}` endpoint. There is a
required query parameter called `relation_type` that indicates the relation of
the person to the organization. Please see the Swagger Schema for possible relation types.

For this example, the person is an employee of the organization. Thus, the
request would look like the following:

```HTTP
POST /people/123e4567-e89b-12d3-a456-426614174000/organizations/8c35f400-171a-4928-8fa3-4c647497df27?relation_type=employee
```

If the request is successful, the person is linked to the organization. The
person should now be able to be found in the organization's list of associated
people or the organization should be found in the person's list of associated
organizations.

- `GET /organizations/{organization_id}` should show all the people linked to the organization via the `associated_people` field.
- `GET /people/{person_id}` should show all the organizations linked to the person via the `associated_organizations` field.

*Example:*

```HTTP
GET /organizations/8c35f400-171a-4928-8fa3-4c647497df27
GET /people/123e4567-e89b-12d3-a456-426614174000
```
