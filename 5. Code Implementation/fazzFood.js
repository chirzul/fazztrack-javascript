/**
 * * author : Muhammad Chirzul Maula
 * * deskripsi program : Mendapatkan harga final untuk pemesanan makanan
 */

const fazzFood = (price, voucher, distance, tax) => {
  const isVoucherValid =
    (voucher.toUpperCase() === "FAZZFOOD50" && price >= 50000) ||
    (voucher.toUpperCase() === "DITRAKTIR60" && price >= 25000) ||
    voucher === "";

  if (!isVoucherValid) {
    console.log(
      `Voucher tidak tersedia atau belum memenuhi syarat minimal pembelian.
Gagal mendapatkan potongan harga.`
    );
  }

  const deliveryFee = distance <= 2 ? 5000 : 5000 + (distance - 2) * 3000;
  const taxFee = tax ? price * 0.05 : 0;
  let discount = 0;

  if (voucher === "FAZZFOOD50" && isVoucherValid) {
    discount = price * 0.5 > 50000 ? 50000 : price * 0.5;
  } else if (voucher === "DITRAKTIR60" && isVoucherValid) {
    discount = price * 0.6 > 30000 ? 30000 : price * 0.6;
  }

  const finalPrice = price + deliveryFee + taxFee - discount;

  console.log(`Harga : ${price}
Potongan : ${discount}
Biaya Antar : ${deliveryFee}
Pajak : ${taxFee}
SubTotal: ${finalPrice}`);
};

export default fazzFood;
