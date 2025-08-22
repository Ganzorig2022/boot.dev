// * Types
const bootupMessage = 'String';
// console.log(bootupMessage);

// * Functions - Void
function logSystemEvent(
	event: string,
	severity: 'info' | 'warning' | 'error'
): void {
	// console.log(`SYSTEM ${severity.toUpperCase()}: ${event}`); // SYSTEM INFO: Boot sequence started
}

logSystemEvent('Boot sequence started', 'info');

//  * Union Types
function getTicketInfo(id: string | number) {
	// ?
	if (typeof id === 'string') {
		console.log(`Fetching ticket info for string ID: ${id}`);
	} else {
		console.log(`Fetching ticket info for numeric ID: ${id}`);
	}
}

getTicketInfo('abc123'); // Fetching ticket info for string ID: abc123

// * Optional Parameters
function calculateApiCost(numReqs: number, tier?: string): number {
	if (!tier) return numReqs * 0.1; // Default cost per request
	if (tier === 'pro') return numReqs * 0.05; // Pro tier cost per request
	if (tier === 'enterprise') return numReqs * 0.03; // Enterprise tier cost per request
	return numReqs * 0.1; // Default cost per request
}

console.log(calculateApiCost(1000)); // 100)
console.log(calculateApiCost(1000, 'pro')); // 100)

// * Default Parameters
function logApiRequest(endpoint: string, method: 'GET' | 'POST' = 'GET'): void {
	console.log(`API Request - Endpoint: ${endpoint}, Method: ${method}`);
}

logApiRequest('/users');

// * Value Unions
type Direction = 'north' | 'south' | 'east' | 'west';
function move(direction: Direction) {
	console.log(`Moving ${direction}`);
}
move('north'); // Moving north

// * Template Literal Types
type EventSeverity = 'info' | 'warning' | 'error';
type LogMessage = `SYSTEM ${Uppercase<EventSeverity>}: ${string}`;

function logMessage(message: LogMessage) {
	console.log(message);
}
logMessage('SYSTEM INFO: Boot sequence started'); // SYSTEM INFO: Boot sequence started
logMessage('SYSTEM ERROR: Boot sequence started'); // SYSTEM INFO: Boot sequence started

// * Arrays
const serverNames: string[] = ['server1', 'server2', 'server3']; // T[] syntax
const serverStatuses: Array<'online' | 'offline' | 'maintenance'> = [
	'online',
	'offline',
	'maintenance',
]; // Array<T> syntax

// * Objects Types
type Superhero = {
	name: string;
	strength: number;
	cape?: boolean; // cape is optional. boolean | undefined
};

// * Dynamic Object Keys
type Config = {
	[key: string]: string | number | boolean; // Dynamic keys with specific value types
};

// * PropertyKey
type PropertyKey = string | number | symbol;
type InfrastructureTags = {
	[key: PropertyKey]: any;
};

const janesServer: InfrastructureTags = {
	name: "Jane's Server",
	1: 420,
	[Symbol('role')]: 'Admin',
};

// * Readonly Properties
type ImmutableUser = {
	readonly id: number; // id cannot be changed after initialization
	name: string;
	email: string;
};

const user: ImmutableUser = {
	id: 1,
	name: 'Alice',
	email: '',
};

// * As const Assertion
const defaultSettings = {
	theme: 'dark',
	version: 1.0,
} as const; // All properties are readonly and literal types

const colorsConst = ['red', 'green', 'blue'] as const;

type ColorMap = {
	red: string;
	green: string;
	blue: string;
	yellow: string;
};

const colorsSatisfies = {
	red: '#FF0000',
	green: '#00FF00',
	blue: '#0000FF',
	yellow: '#FFFF00',
	// Error: "yelow" is not in type ColorMap
	// yelow: "#FFFF00"
} satisfies ColorMap;

// We keep the literal types!
type RedHexSatisfies = typeof colorsSatisfies.red; // "#FF0000"

// * Tuples
// A tuple is a special kind of array where each position has a specific, known type.
type ApiResponse = [number, string, object?]; // status code, message, optional data

const response1: ApiResponse = [200, 'OK'];

const nameAndAge: readonly [string, number] = ['Martha Jones', 24];
// nameAndAge[0] = "New Name"; // Error: Cannot assign to '0' because it is a read-only property.

// * Intersection Types.
// Combining multiple types into one.
type Admin = {
	name: string;
	privileges: string[];
};
type Employee = {
	name: string;
	startDate: Date;
};

type ElevatedEmployee = Admin & Employee; // Intersection of Admin and Employee
const e1: ElevatedEmployee = {
	name: 'Max',
	privileges: ['create-server'],
	startDate: new Date(),
};

// * Never Type
// The never type represents values that never occur.
function handleStatusCode(code: 200 | 404 | 500) {
	if (code === 200) {
		console.log('OK');
		return;
	}
	if (code === 404) {
		console.log('Not Found');
		return;
	}
	if (code === 500) {
		console.log('Internal Server Error');
		return;
	}
	// no errors! code is never
	const err: never = code;
	return err;
}

handleStatusCode(200);
handleStatusCode(404);
handleStatusCode(500);
// handleStatusCode(403); // Error: Argument of type '403' is not assign

// * Type Aliases vs Interfaces
// Type Aliases
type Point = {
	x: number;
	y: number;
}; // Cannot be extended

// Interfaces can be extended by other interfaces
interface Character {
	name: string;
	level: number;
}

interface Wizard extends Character {
	spellbook: string[];
	mana: number;
}

// * Unknown Type
// The unknown type is a safer alternative to any.
function processData(data: any) {
	// TypeScript allows this even though it might crash
	// console.log(data.toLowerCase());

	// TypeScript allows this too - it's like we're using plain JavaScript
	// return data.nonExistentMethod();
}

// No errors when calling the function
processData(42); // Will crash at runtime

function processData1(data: unknown) {
	// Error: Object is of type 'unknown'
	// console.log(data.toLowerCase());
	// Error: Object is of type 'unknown'
	// return data.nonExistentMethod();
}

// * Type Guards
// Type guards are functions that check the type of a variable at runtime.
function processName(name: string | null | undefined) {
	if (name === null || name === undefined) {
		throw new Error('Name is required');
	}
	// TypeScript knows name is a string here
	return name.toUpperCase();
}

// * Type Assertions
const route = {
	query: {
		userId: '1',
	},
};
const userIdRaw = <string>route.query?.userId;
const userId = userIdRaw.toLowerCase();


// * Utility Types
// Partial<T> - Makes all properties optional
type User = {
	id: number;
	name: string;
	email: string;
};
type PartialUser = Partial<User>; // All properties are optional

// Required<T> - Makes all properties required
type OptionalUser = {
	id?: number;
	name?: string;
	email?: string;
};
type RequiredUser = Required<OptionalUser>; // All properties are required

// Readonly<T> - Makes all properties readonly
interface UserProfile {
  id: string;
  name: string;
  preferences: {
    readonly theme: "light" | "dark";
    notifications: boolean;
  };
}

type ConstantUserProfile = Readonly<UserProfile>;

// Generics
// Generics allow you to create reusable components that work with any data type.
async function fetchFromApi<T>(url: string): Promise<T | undefined> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return undefined;
  }
}

function identity(arg: any): any {
  return arg;
}
let output = identity("myString");

function identity1<Type>(arg: Type): Type {
  return arg;
}

let output1 = identity1("myString");
