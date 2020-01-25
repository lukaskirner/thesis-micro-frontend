export function pricetoEuro(price: number): string {
	const formatter = new Intl.NumberFormat('de-DE', {
		style: 'currency',
		currency: 'EUR'
	})

	return formatter.format(price/100)
}
