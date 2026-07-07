<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class PHMobileValidator implements ValidationRule
{
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $cleaned = preg_replace('/[\s().-]/', '', (string) $value);

        $isLocal = preg_match('/^09\d{9}$/', $cleaned) === 1;
        $isInternational = preg_match('/^\+639\d{9}$/', $cleaned) === 1;
        $isInternationalWithoutPlus = preg_match('/^639\d{9}$/', $cleaned) === 1;

        if (! $isLocal && ! $isInternational && ! $isInternationalWithoutPlus) {
            $fail('The :attribute must be a valid Philippine mobile number.');
        }
    }
}
