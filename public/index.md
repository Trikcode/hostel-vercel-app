
# Hostel-API



<!--- If we have only one group/collection, then no need for the "ungrouped" heading -->
1. [Create Hostel](#1-create-hostel)
1. [Update Hostel](#2-update-hostel)
1. [Delete Hostel](#3-delete-hostel)
1. [Get All Hostels](#4-get-all-hostels)
1. [UploadImage](#5-uploadimage)



## Endpoints


--------



### 1. Create Hostel



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: localhost:3000/products
```



***Body:***

```js        
{
    "name":"New Nana",
    "location":"Kikoni Makererere",
    "category":"hostel",
    "imageurl":"https://st.depositphotos.com/1033142/1247/i/600/depositphotos_12476324-stock-photo-the-streets-of-kampala-uganda.jpg",
    "priceone":3563,
    "pricetwo":3999,
    "description":"we have all that u need"

}
```



### 2. Update Hostel



***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: localhost:3000/products/62b72b089e4089c7087b2264
```



***Body:***

```js        
{
    "name":"Kani",
    "location":"Kikoni Makererere",
    "category":"hostel",
    "priceone":3563,
    "pricetwo":3999,
    "description":"we have all that u need"

}
```



### 3. Delete Hostel



***Endpoint:***

```bash
Method: DELETE
Type: RAW
URL: localhost:3000/products/62b72b089e4089c7087b2264
```



***Body:***

```js        
{
    "name":"Kani",
    "location":"Kikoni Makererere",
    "category":"hostel",
    "priceone":3563,
    "pricetwo":3999,
    "description":"we have all that u need"

}
```



### 4. Get All Hostels



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: localhost:3000/products
```



***Body:***

```js        
{
    "name":"New Nana",
    "location":"Kikoni Makererere",
    "category":"hostel",
    "priceone":3563,
    "pricetwo":3999,
    "description":"we have all that u need"

}
```



### 5. UploadImage



***Endpoint:***

```bash
Method: POST
Type: FORMDATA
URL: localhost:3000/products/uploadImage
```



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| image |  |  |



---
[Back to top](#hostel-api)

>Generated at 2022-06-26 19:29:36 by [docgen](https://github.com/thedevsaddam/docgen)
