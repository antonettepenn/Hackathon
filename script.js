function updateSliderVal(sliderId, outputId) {
    const value = document.getElementById(sliderId).value;
    document.getElementById(outputId).textContent = `$${value}`;
}
