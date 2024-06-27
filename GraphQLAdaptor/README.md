# Connecting GraphQL Service with Typescript Grid Control

GraphQL is a powerful query language for APIs, designed to provide a more efficient alternative to traditional REST APIs. It allows you to precisely fetch the data you need, reducing over-fetching and under-fetching of data. GraphQL provides a flexible and expressive syntax for querying, enabling clients to request only the specific data they require.

Syncfusion’s Grid component seamlessly integrates with GraphQL servers using the GraphQLAdaptor in the DataManager. This specialized adaptor simplifies the interaction between the Syncfusion Grid and GraphQL servers, allowing efficient data retrieval with support for various operations like CRUD (Create, Read, Update, Delete), paging, sorting, and filtering.

## Add Syncfusion Grid component in your application

Refer the following UG documenation for adding Syncfusion Grid component in your application
* [Getting Started of Syncfusion TypeScript Grid component](https://ej2.syncfusion.com/documentation/grid/getting-started)

## GraphQL Server setup

You can setup GraphQL server by using `graphpack` npm package. Find the following link for getting more details for your reference.

* [graphpack npm package](https://www.npmjs.com/package/graphpack) 

## Run the GraphQL Server

To run the server, install the required packages using the following command:

```bash
npm install
```
Then, start the server with:
```bash
npm run dev
```
## Run the client Grid application

To run the client-side Syncfusion Grid application, use the following command:

```bash
npm start
```

![GraphQLAdaptor](../assets/images/adaptor-crud-operation.gif)

## Resources

You can also refer the below resources to know more details about Syncfusion Typescript Grid Control.

* [Demo](https://ej2.syncfusion.com/demos/#/bootstrap/grid/over-view)
* [Documentation](https://ej2.syncfusion.com/documentation/grid/getting-started)
* [GraphQL with Syncfusion DataManager](https://ej2.syncfusion.com/documentation/grid/connecting-to-adaptors/graphql-adaptor)