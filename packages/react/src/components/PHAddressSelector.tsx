import { useId, type ChangeEvent } from 'react';

export type Barangay = {
  code: string;
  name: string;
};

export type CityMunicipality = {
  code: string;
  name: string;
  barangays: Barangay[];
};

export type Province = {
  code: string;
  name: string;
  cities: CityMunicipality[];
};

export type Region = {
  code: string;
  name: string;
  provinces: Province[];
};

export type PHAddressValue = {
  regionCode?: string;
  provinceCode?: string;
  cityCode?: string;
  barangayCode?: string;
};

export type PHAddressSelectorProps = {
  regions: Region[];
  value: PHAddressValue;
  onChange: (value: PHAddressValue) => void;
  disabled?: boolean;
  className?: string;
  labels?: {
    region?: string;
    province?: string;
    city?: string;
    barangay?: string;
  };
};

function getSelectedRegion(regions: Region[], regionCode?: string) {
  return regions.find((region) => region.code === regionCode);
}

function getSelectedProvince(region: Region | undefined, provinceCode?: string) {
  return region?.provinces.find((province) => province.code === provinceCode);
}

function getSelectedCity(province: Province | undefined, cityCode?: string) {
  return province?.cities.find((city) => city.code === cityCode);
}

export function PHAddressSelector({
  regions,
  value,
  onChange,
  disabled = false,
  className,
  labels
}: PHAddressSelectorProps) {
  const fieldIdPrefix = useId();
  const selectedRegion = getSelectedRegion(regions, value.regionCode);
  const selectedProvince = getSelectedProvince(selectedRegion, value.provinceCode);
  const selectedCity = getSelectedCity(selectedProvince, value.cityCode);

  const regionFieldId = `${fieldIdPrefix}-region`;
  const provinceFieldId = `${fieldIdPrefix}-province`;
  const cityFieldId = `${fieldIdPrefix}-city`;
  const barangayFieldId = `${fieldIdPrefix}-barangay`;

  const handleRegionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange({
      regionCode: event.target.value || undefined,
      provinceCode: undefined,
      cityCode: undefined,
      barangayCode: undefined
    });
  };

  const handleProvinceChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange({
      regionCode: value.regionCode,
      provinceCode: event.target.value || undefined,
      cityCode: undefined,
      barangayCode: undefined
    });
  };

  const handleCityChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange({
      regionCode: value.regionCode,
      provinceCode: value.provinceCode,
      cityCode: event.target.value || undefined,
      barangayCode: undefined
    });
  };

  const handleBarangayChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange({
      ...value,
      barangayCode: event.target.value || undefined
    });
  };

  return (
    <div className={className}>
      <div className="ph-devkit-field">
        <label htmlFor={regionFieldId}>{labels?.region ?? 'Region'}</label>
        <select
          id={regionFieldId}
          value={value.regionCode ?? ''}
          onChange={handleRegionChange}
          disabled={disabled}
        >
          <option value="">Select region</option>
          {regions.map((region) => (
            <option key={region.code} value={region.code}>
              {region.name}
            </option>
          ))}
        </select>
      </div>

      <div className="ph-devkit-field">
        <label htmlFor={provinceFieldId}>{labels?.province ?? 'Province'}</label>
        <select
          id={provinceFieldId}
          value={value.provinceCode ?? ''}
          onChange={handleProvinceChange}
          disabled={disabled || !selectedRegion}
        >
          <option value="">Select province</option>
          {selectedRegion?.provinces.map((province) => (
            <option key={province.code} value={province.code}>
              {province.name}
            </option>
          ))}
        </select>
      </div>

      <div className="ph-devkit-field">
        <label htmlFor={cityFieldId}>{labels?.city ?? 'City / Municipality'}</label>
        <select
          id={cityFieldId}
          value={value.cityCode ?? ''}
          onChange={handleCityChange}
          disabled={disabled || !selectedProvince}
        >
          <option value="">Select city or municipality</option>
          {selectedProvince?.cities.map((city) => (
            <option key={city.code} value={city.code}>
              {city.name}
            </option>
          ))}
        </select>
      </div>

      <div className="ph-devkit-field">
        <label htmlFor={barangayFieldId}>{labels?.barangay ?? 'Barangay'}</label>
        <select
          id={barangayFieldId}
          value={value.barangayCode ?? ''}
          onChange={handleBarangayChange}
          disabled={disabled || !selectedCity}
        >
          <option value="">Select barangay</option>
          {selectedCity?.barangays.map((barangay) => (
            <option key={barangay.code} value={barangay.code}>
              {barangay.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
