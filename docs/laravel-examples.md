# Laravel Examples

## Mobile number validation

See `examples/laravel-api/PHMobileValidator.php`.

Example usage:

```php
$request->validate([
    'mobile_number' => ['required', new PHMobileValidator()],
]);
```

## Address validation

For MVP, validate address fields as codes instead of free-text labels.

```php
$request->validate([
    'region_code' => ['required', 'string'],
    'province_code' => ['nullable', 'string'],
    'city_code' => ['required', 'string'],
    'barangay_code' => ['required', 'string'],
]);
```
