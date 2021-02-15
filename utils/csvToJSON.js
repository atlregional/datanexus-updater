const fs = require('fs');

module.exports = csvPath => {
	// Removing " symbols and splitting into rows
	const rows = fs.readFileSync(csvPath, 'utf-8').replace(/"/g, '').split('\n');
	const cols = rows[0].split(',');

	const arr = [];

	for (let i = 1; i < rows.length; i++) {
		const obj = {};
		const currentRow = rows[i].split(',');

		for (let j = 0; j < cols.length; j++) {
			// Editing error in API keys...
			cols[j] === 'API\r' ? (cols[j] = 'API') : null;

			obj[cols[j]] = currentRow[j];
		}
		arr.push(obj);
	}

	return arr;
};
