// * Types
const bootupMessage = 'String';
// console.log(bootupMessage);

// * Functions - Void
function logSystemEvent(event: string, severity: 'info' | 'warning' | 'error'): void {
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

(logApiRequest('/users'));