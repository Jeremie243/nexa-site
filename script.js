function calculate() {
    const price = Number(document.getElementById('price').value || 0);
    const weight = Number(document.getElementById('weight').value || 0);

    // Arrondi au demi-kilo supérieur
    const billedWeight = Math.ceil(weight * 2) / 2;

    // Expédition NEXA
    const shipping = billedWeight * 29;

    // Total estimé
    const total = price + shipping;

    document.getElementById('estimate').innerHTML = `
        <div style="font-size:14px;color:rgba(0,0,0,.6);margin-bottom:10px;">
            Poids saisi : ${weight} kg
        </div>

        <div style="font-size:14px;color:rgba(0,0,0,.6);margin-bottom:10px;">
            Poids facturé : ${billedWeight} kg
        </div>

        <div style="font-size:14px;color:rgba(0,0,0,.6);margin-bottom:10px;">
            Expédition : ${shipping.toFixed(2)} $
        </div>

        <strong>${total.toFixed(2)} $</strong>
    `;
}

function showTrack() {
    document.getElementById('trackResult').style.display = 'block';
}

calculate();