using Microsoft.AspNetCore.Mvc;
using PHDevKit.Examples.Models;

namespace PHDevKit.Examples.Controllers;

[ApiController]
[Route("api/customers")]
public sealed class CustomersController : ControllerBase
{
    [HttpPost]
    public IActionResult Store(RegisterCustomerRequest request)
    {
        return Ok(new
        {
            message = "Validated successfully.",
            data = request
        });
    }
}
