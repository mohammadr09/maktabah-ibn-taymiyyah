import { Product } from "@/lib/types/product";

export const products: Product[] = [
    {
        id: "1",
        name: "Tafsir Ibn Kathir",
        author: "Imam Abu Isma'il Ibn Kathir",
        description: "A classical Quran commentary-- a reference point for the scholars.",
        publishingHouse: "Dar Ibn al-Jawzi",
        image: "/tafsir-ibn-kathir.jpg"
    },
    {
        id: "2",
        name: "Riyadh as-Salihin",
        author: "Imam Abu Zakariyya Yahya ibn Sharaf an-Nawawi",
        description: "A famous hadith collection by Imam Nawawi.",
        publishingHouse: "Dar Ibn al-Jawzi",
        image: "/riyad-as-saliheen.jpg"
    },
    {
        id: "3", 
        name: "The Sealed Nectar", 
        author: "Safiur Rahman Mubarakpuri", 
        description: "Biography of the Prophet ﷺ. First Prize Winner in the Seerah Competition in Madinah.",
        publishingHouse: "Dar Ibn al-Hazm",
        image: "/the-sealed-nectar.jpg"
    },
]