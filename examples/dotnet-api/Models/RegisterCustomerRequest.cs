using System.ComponentModel.DataAnnotations;

namespace PHDevKit.Examples.Models;

public sealed class RegisterCustomerRequest
{
    [Required]
    [MaxLength(120)]
    public string Name { get; set; } = string.Empty;

    [Required]
    [PHMobileNumber]
    public string MobileNumber { get; set; } = string.Empty;

    [Required]
    public string RegionCode { get; set; } = string.Empty;

    [Required]
    public string CityCode { get; set; } = string.Empty;

    [Required]
    public string BarangayCode { get; set; } = string.Empty;
}
