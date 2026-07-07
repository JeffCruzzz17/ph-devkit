using System.ComponentModel.DataAnnotations;
using System.Text.RegularExpressions;

namespace PHDevKit.Examples.Models;

[AttributeUsage(AttributeTargets.Property | AttributeTargets.Field | AttributeTargets.Parameter)]
public sealed class PHMobileNumberAttribute : ValidationAttribute
{
    private static readonly Regex LocalRegex = new("^09\\d{9}$", RegexOptions.Compiled);
    private static readonly Regex InternationalRegex = new("^\\+639\\d{9}$", RegexOptions.Compiled);
    private static readonly Regex InternationalNoPlusRegex = new("^639\\d{9}$", RegexOptions.Compiled);

    public override bool IsValid(object? value)
    {
        if (value is null)
        {
            return false;
        }

        var cleaned = Regex.Replace(value.ToString() ?? string.Empty, "[\\s().-]", string.Empty);

        return LocalRegex.IsMatch(cleaned)
            || InternationalRegex.IsMatch(cleaned)
            || InternationalNoPlusRegex.IsMatch(cleaned);
    }

    public override string FormatErrorMessage(string name)
    {
        return $"{name} must be a valid Philippine mobile number.";
    }
}
