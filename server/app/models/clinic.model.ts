export default class Clinic {
	NumAVi?: number;
	Emer_Dept_hmo_GK?: number;
	LastUpdateDate?: string;
	// תאריך וזמן; טעינת הנתונים?: string
	// חלק יום; העברת הנתונים?: string
	IsLastInput?: number;
	ClinicStatus?: string;
	CityCode?: number;
	CityName?: string;
	LocalAuthorityName?: string;
	HealthMedicalCenterDistrictName?: string;
	MadaDistrict?: string;
	StreetName?: string;
	HouseNumber?: number;
	ZipCode?: number;
	PhoneNumberA?: string;
	PhoneNumberB?: string;
	Fax?: string;
	HealthMedicalCenterCode?: number;
	ClinicCode?: number;
	HealthMedicalCenterName?: string;
	ClinicName?: string;
	NorthernBorderDistance?: number;
	GazaBorderDistance?: number;
	DistrictName?: string;
	HasFamilyDoctorInRoutine?: string;
	HasNurseInRoutine?: string;
	HasChildrenDoctorInRoutine?: string;
	HasGynecologistInRoutine?: string;
	HasPharmacyInRoutine?: string;
	ShelterType?: string;
	ShelterPolicy?: string;
	HandicappedAccess?: string;
	HasElectricityBoardForGenerator?: string;
	HasGenerator?: string;
	IsUnifiedClinic?: string;
	PharmacyStatus?: string;
	HasFamilyDoctorNow?: string;
	HasNurseNow?: string;
	HasChildrenDoctorNow?: string;
	HasGynecologistNow?: string;
	Location?: Location;
}

interface Location {
	x: number;
	y: number;
};