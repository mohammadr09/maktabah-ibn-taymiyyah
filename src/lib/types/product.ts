export interface Product {
    id: string,
    name: string,
    author: string,
    science: "Tafsir" | "Aqeedah" | "Hadith" | "Fiqh - General" | "Hanafi Fiqh" | "Maliki Fiqh" | "Shafi'i Fiqh" | "Hanbali Fiqh" | "Arabic Language" | "Seerah" | "Adab",
    description: string,
    publishingHouse: string,
    image: string,

    price: number
    volumes: number
    language: "English" | "Arabic"
    pageCount: number,
    harakat: "Majority" | "Partial" | "Little to None",
    tahqeeq: string, // name of the Muhaqqiq
    printQuality: "Premium +" | "Premium" | "Good" | "Budget",
    cover: "Hard Leather Cover" | "Hard Color Cover" | "Soft Cover",

    priceId: string, 
    stockCount: number,
    referenceCode?: string,
}