export const getListings = () => {
    return [
        { id: 1, name: "La Soñada Real", sideWay: "left", dimensions: "20X30", width: 20, heigth: 30, status: "vendido", corner: true, neighbor: [2, 3, 4], seller: "Alicia Garcia", sellerId: 101, gallery: [URL("./media/aereo-dia-1.jpg")] },
        { id: 2, name: "Sol Naciente", sideWay: "center", dimensions: "15X25", width: 15, heigth: 25, status: "en-venta", corner: false, neighbor: [1, 3, 5], seller: "Carlos López", sellerId: 102, gallery: [] },
        { id: 3, name: "Brisa Marina", sideWay: "right", dimensions: "18X22", width: 18, heigth: 22, status: "en-venta", corner: true, neighbor: [1, 2, 4], seller: "María Rodríguez", sellerId: 103, gallery: [] },
        { id: 4, name: "Luna Llena", sideWay: "left", dimensions: "10X40", width: 10, heigth: 40, status: "reservado", corner: false, neighbor: [1, 3, 5], seller: "Juan Martínez", sellerId: 104, gallery: [] },
        { id: 5, name: "Monte Azul", sideWay: "center", dimensions: "30X30", width: 30, heigth: 30, status: "en-venta", corner: true, neighbor: [2, 4, 6], seller: "Ana González", sellerId: 105, gallery: [] },
        { id: 6, name: "Paz y Tranquilidad", sideWay: "right", dimensions: "12X28", width: 12, heigth: 28, status: "vendido", corner: false, neighbor: [5, 7, 8], seller: "Pedro Sánchez", sellerId: 106, gallery: [] },
        { id: 7, name: "Bosque Encantado", sideWay: "left", dimensions: "25X35", width: 25, heigth: 35, status: "reservado", corner: true, neighbor: [6, 8, 9], seller: "Laura Fernández", sellerId: 107, gallery: [] },
        { id: 8, name: "Amanecer Dorado", sideWay: "center", dimensions: "20X20", width: 20, heigth: 20, status: "en-venta", corner: false, neighbor: [6, 7, 9], seller: "Diego Pérez", sellerId: 108, gallery: [] },
        { id: 9, name: "Valle Sereno", sideWay: "right", dimensions: "15X25", width: 15, heigth: 25, status: "vendido", corner: true, neighbor: [7, 8, 10], seller: "Sofía Gómez", sellerId: 109, gallery: [] },
        { id: 10, name: "Sueño Real", sideWay: "left", dimensions: "22X18", width: 22, heigth: 18, status: "en-venta", corner: false, neighbor: [9, 11, 12], seller: "Manuel Díaz", sellerId: 110, gallery: [] },
        { id: 11, name: "Aurora Boreal", sideWay: "center", dimensions: "28X22", width: 28, heigth: 22, status: "reservado", corner: true, neighbor: [10, 12, 13], seller: "Luisa Martínez", sellerId: 111, gallery: [] }
    ];
}