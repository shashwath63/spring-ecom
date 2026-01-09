package com.example.springEcom.model.dto;
//DTOs are plain Java objects used to transfer data between different layers of the application, especially between the client (like a web browser) and the server
//     (your Spring Boot backend). They act as a contract for your API
public record OrderItemRequest(
        int productId,
        int quantity
) {
}
