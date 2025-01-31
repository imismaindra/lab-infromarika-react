import React from "react";
import { Head, Link } from "@inertiajs/react";
import PageLayout from "@/Layouts/PageLayout";
import axios from "axios";

export default function PraktikumList({ praktikums }) {
    // Fungsi untuk menghapus praktikum
    const deletePraktikum = (id) => {
        if (confirm("Apakah Anda yakin ingin menghapus praktikum ini?")) {
            axios.delete(`/praktikum/${id}`).then(() => {
                window.location.reload();
            });
        }
    };

    return (
        <PageLayout title="Daftar Praktikum">
            <Head title="Daftar Praktikum" />
            <div className="p-8 bg-white rounded-lg shadow-lg">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Daftar Praktikum
                    </h1>
                    <Link
                        href="/praktikum/create"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                    >
                        + Tambah Praktikum
                    </Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-100 text-left">
                                <th className="p-3 font-semibold text-gray-700">
                                    Nama
                                </th>
                                <th className="p-3 font-semibold text-gray-700">
                                    Kelas
                                </th>
                                <th className="p-3 font-semibold text-gray-700">
                                    Periode
                                </th>
                                <th className="p-3 font-semibold text-gray-700">
                                    Tahun
                                </th>
                                <th className="p-3 font-semibold text-gray-700">
                                    Status
                                </th>
                                <th className="p-3 font-semibold text-gray-700">
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {praktikums && praktikums.length > 0 ? (
                                praktikums.map((item) => (
                                    <tr
                                        key={item.id}
                                        className="border-b border-gray-200 hover:bg-gray-50 transition duration-150 ease-in-out"
                                    >
                                        <td className="p-3">{item.name}</td>
                                        <td className="p-3">{item.kelas}</td>
                                        <td className="p-3">{item.periode}</td>
                                        <td className="p-3">{item.tahun}</td>
                                        <td className="p-3">
                                            <span
                                                className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                                    item.status === 1
                                                        ? "bg-green-100 text-green-800"
                                                        : "bg-gray-100 text-gray-800"
                                                }`}
                                            >
                                                {item.status === 1
                                                    ? "Aktif"
                                                    : "Tidak Aktif"}
                                            </span>
                                        </td>
                                        <td className="p-3">
                                            <div className="flex gap-2">
                                                <Link
                                                    href={`/praktikum/${item.id}/edit`}
                                                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-300 ease-in-out"
                                                >
                                                    Edit
                                                </Link>
                                                <button
                                                    onClick={() =>
                                                        deletePraktikum(item.id)
                                                    }
                                                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition duration-300 ease-in-out"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="6"
                                        className="text-center p-6 text-gray-500 italic"
                                    >
                                        Tidak ada praktikum tersedia.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </PageLayout>
    );
}
