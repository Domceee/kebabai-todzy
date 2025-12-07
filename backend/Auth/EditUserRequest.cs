namespace BackendApi.Auth;

public record EditUserRequest(
    int Id,
    string FirstName,
    string LastName,
    string Email,
    string? PhoneNumber,
    string? Address
);