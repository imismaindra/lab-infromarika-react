import React, { useState } from "react";
import { router, Head } from "@inertiajs/react";
import {
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    Input,
    Button,
    Typography,
    Select,
    Option,
} from "@material-tailwind/react";

export default function RoleCreate() {
    const [values, setValues] = useState({
        name: "",
        status: "1",
    });

    function handleChange(e) {
        const { id, value } = e.target;
        setValues((prev) => ({ ...prev, [id]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        router.post("/role", values);
    }

    return (
        <>
            <Head title="Tambah Role" />
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-400 to-blue-700">
                <Card className="w-full max-w-lg shadow-lg bg-white">
                    {/* Header */}
                    <CardHeader
                        floated={false}
                        className="bg-blue-600 text-white text-center py-5 rounded-t-lg"
                    >
                        <Typography variant="h4" className="font-bold">
                            Tambah Role
                        </Typography>
                        <Typography variant="small" className="text-gray-200">
                            Silakan isi data role di bawah ini
                        </Typography>
                    </CardHeader>

                    {/* Form */}
                    <CardBody className="px-6 py-4">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Input Nama Role */}
                            <div>
                                <Input
                                    id="name"
                                    label="Nama Role"
                                    value={values.name}
                                    onChange={handleChange}
                                    required
                                    className="focus:border-blue-500"
                                />
                            </div>

                            {/* Select Status */}
                            <div>
                                <Select
                                    label="Status"
                                    id="status"
                                    value={values.status}
                                    onChange={(value) =>
                                        setValues((prev) => ({
                                            ...prev,
                                            status: value,
                                        }))
                                    }
                                    className="focus:border-blue-500"
                                >
                                    <Option value="1">Aktif</Option>
                                    <Option value="0">Tidak Aktif</Option>
                                </Select>
                            </div>
                        </form>
                    </CardBody>

                    {/* Footer */}
                    <CardFooter className="flex justify-between px-6 py-4 bg-gray-100 rounded-b-lg">
                        <Button
                            color="red"
                            variant="outlined"
                            onClick={() => history.back()}
                        >
                            Batal
                        </Button>
                        <Button color="blue" onClick={handleSubmit}>
                            Simpan Role
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </>
    );
}
