<?php

namespace App\Http\Controllers;

use App\Rules\PHMobileValidator;
use Illuminate\Http\Request;

class ExampleController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:120'],
            'mobile_number' => ['required', new PHMobileValidator()],
            'region_code' => ['required', 'string'],
            'city_code' => ['required', 'string'],
            'barangay_code' => ['required', 'string'],
        ]);

        return response()->json([
            'message' => 'Validated successfully.',
            'data' => $validated,
        ]);
    }
}
