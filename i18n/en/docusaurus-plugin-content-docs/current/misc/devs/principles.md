---
sidebar_position: 1
---

# Principles for development

These are general guidelines when developing for DigiQuip. Whenever you feel that they don’t apply to your current task, stop and think and then discuss it with someone else in the team to make sure that we avoid to many deviations from these principles.

## General principles

### Proper Layers

We have a properly layered structure of our software. The easiest three layers to identify is our Database, Backends and Frontends. Obviously, we can have several of each, but there is an important principle in this layering: We do not allow functions that belong in one layer to be set in another. Examples: We do not set database logic in the backend layer, and we do not apply security measures in the frontend if it should be in the backend.

Another important thing about the layers is that we treat them as freestanding and with a purpose of their own. We should be able to have two backends talking to the same database without repeating code (see “DRY” below).  We should have proper security on every layer. We should make every layer usable by multiple other layers (so that we don’t make a backend specifically for only one frontend).

### The obvious ones

**KISS (Keep It Simple, Short)** and **DRY (Don’t Repeat Yourself)**.

**Not fully test-driven, but test-focused.**
Starting everything with writing the test is the ideal, but not always practical. Our principle is that we will strive to write tests for most, especially now that AI is helping us.


### Peer Reviews in Small PRs

All code needs to be reviewed by someone else within the organisation before it published (both for dev/staging and production environments). We do this through Pull Requests (PRs) in Github and we keep the PRs small and clean. Make sure that you don't include other commits into your PR that comes from other branches - try to rebase instead.

## Principles for database Development

### UUIDs for Primary Keys (PK)
There are pros and cons with having UUIDs for PKs, where size is the biggest con. In our scenario, where we have several databases where we potentially want to merge over time, UUIDs will ensure that we can avoid PK conflicts. Also, it is a nice and simple security measure.

### Use default values, restrictions and triggers
Following the principle of proper layering, we use these functions to make sure that the database makes it easy for the backend to stay “DRY”. E.g. we make PK values by default rather than having the backend creating them (you can always set a default value yourself if you need to). If we know that a field only should have specifically formatted strings, don’t just set the schema for string, but set the restriction also. In general, you should be able to read a schema and understand what the database wants as content.

### Databases are testable!
Like everything else, databases are testable, and we should write tests that makes sure that we are achieving what we need while maintaining regression consistency.

### Clean up after yourself and others
If you find stuff in the schema that is no longer in use or you are writing functionality that replaces something, create a migration that removes the unneeded stuff.

### Migrations goes both ways
Often, to save a bit of time, migrations contain “up” but not “down”. Don’t save that time – write the “down” unless there is a very good reason not to.

### For us, JSON is OK to use in the schema
A controversial subject for some, but we are OK with using JSON as a field type if it removes unneeded complexities elsewhere.

## Principles for backend development

### Swagger and OpenAPI for documentation
