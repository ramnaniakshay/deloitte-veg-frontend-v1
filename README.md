API Documentation for Vegetable Management System

Base URL: http://localhost:1337/api

Authentication: Bearer Token (JWT) - required for all protected endpoints.  Obtain token from /api/auth/local endpoint after successful login.


Endpoints:

1.  /api/auth/local

    *   Method: POST
    *   Description: Authenticates a user and returns a JWT.
    *   Request Body:
        ```json
        {
          "identifier": "user_email",
          "password": "user_password"
        }
        ```
    *   Response (Success - 200 OK):
        ```json
        {
          "jwt": "your_jwt_token",
          "user": { /* User details */ }
        }
        ```

2.  /api/auth/local/register

    *   Method: POST
    *   Description: Registers a new user.
    *   Request Body:
        ```json
        {
          "username": "new_username",
          "email": "new_user_email",
          "password": "new_user_password"
        }
        ```
    *   Response (Success - 200 OK):  Similar to /api/auth/local login response.


3.  /api/master-vegs

    *   Method: GET
    *   Description: Retrieves all vegetables. Requires authentication.
    *   Response (Success - 200 OK):
        ```json
        {
          "data": [
            {
              "id": 1,
              "attributes": {
                "name": "Tomato",
                "color": "Red",
                // ... other attributes
              }
            },
            // ... more vegetables
          ]
        }
        ```

    *   Method: POST
    *   Description: Creates a new vegetable. Requires authentication.
    *   Request Body:
        ```json
        {
          "data": {
            "name": "New Vegetable",
            "color": "Green",
            // ... other attributes
          }
        }
        ```
    *   Response (Success - 201 Created): Returns the newly created vegetable data.


4. /api/master-vegs/{documentId}

* Method: DELETE
* Description: Deletes a specific vegetable by documentId.  Requires authentication.
* Notes: Replace `{documentId}` with the actual documentId of the vegetable.



Error Handling:

All endpoints return standard HTTP error codes.  Error responses typically include a JSON object with an `error` property containing details about the error.


Notes:

*   Replace `{id}` with the actual ID of the vegetable.
*   All POST requests must include the JWT in the `Authorization` header with the `Bearer` prefix.


