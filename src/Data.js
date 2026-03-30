export const products = [
  {
    id: 1,
    name: "Hair Growth Serum",
    description:
      "يساعد على إنبات الشعر وتقوية البصيلات من الجذور. غني بمزيج من الزيوت الطبيعية التي تعيد الحيوية والانتعاش لفروة رأسك.",
    image: "/hair-serum.webp",
    offers: [
      {
        id: "1pc",
        label: "واحد قطعة",
        quantity: 1,
        price: 389,
        oldPrice: 530, // السعر القديم للقطعة
      },
      {
        id: "3pc",
        label: "3 قطع (الأكثر اختياراً) 🔥",
        quantity: 3,
        price: 779,
        oldPrice: 1650, // السعر القديم للعرض
      },
    ],
  },
];
