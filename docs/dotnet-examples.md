# .NET Web API Examples

## Mobile number validation

See `examples/dotnet-api/Models/PHMobileNumberAttribute.cs`.

Example DTO:

```csharp
public sealed class RegisterCustomerRequest
{
    [Required]
    [PHMobileNumber]
    public string MobileNumber { get; set; } = string.Empty;
}
```

## Address DTO

Use codes as stable identifiers and labels only for display.

```csharp
public sealed class AddressDto
{
    public string RegionCode { get; set; } = string.Empty;
    public string ProvinceCode { get; set; } = string.Empty;
    public string CityCode { get; set; } = string.Empty;
    public string BarangayCode { get; set; } = string.Empty;
}
```
