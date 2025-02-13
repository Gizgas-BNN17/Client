import React, { useState } from 'react'
import Resize from 'react-image-file-resizer'
import { removeFiles, uploadFiles } from '../../api/product'
// import { removeFiles, uploadFiles } from '../../api/product'
import useEcomStore from '../../store/ecomStore'
import { toast } from 'react-toastify'

// import { Loader } from 'lucide-react';

const Uploadfile = ({ form, setForm }) => {
    const token = useEcomStore((state) => state.token)
    const [isLoading, setIsLoading] = useState(false)
    const handleOnChange = (e) => {
        // code
        //setIsLoading(true)
        const files = e.target.files
        if (files) {
            setIsLoading(true)
            let allFiles = form.images  // [] empty array / url
            for (let i = 0; i < files.length; i++) {
                //  console.log(files[i])
                const file = files[i]
                // console.log(file)
                if (!file.type.startsWith('image/')) {
                    toast.error(`File ${file.name} ไม่ใช่รูปภาพ`)
                    continue
                }
                //Image resiza
                Resize.imageFileResizer(
                    files[i],
                    720,
                    720,
                    "JPEG",
                    100,
                    0,
                    (data) => {
                        //enpoint back
                        console.log('data : ', data)
                        uploadFiles(token, data)
                            .then((res) => {
                                console.log(res)
                                allFiles.push(res.data)
                                setForm({
                                    ...form,
                                    Images: allFiles

                                })
                                // toast.success('Upload image Sucess !!!')
                            })
                            .catch((err) => {
                                console.log(err)
                            })
                    },
                    "base64"
                )
            }
        }


    }
    console.log(form)

      const handleDelete = (public_id) => {
        const images = form.images
        removeFiles(token, public_id)
            .then((res) => {
                const filterImages = images.filter((item) => {
                    console.log(item)
                    return item.public_id !== public_id
                })

                console.log('filterImages', filterImages)
                setForm({
                    ...form,
                    images: filterImages
                })
                toast.error(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            {/* <div className='flex mx-4 gap-4 my-4'>
                {
                    form.images.map((item, index) =>
                        <div className='relative' key={index}>
                            <img className='w-24 h-24 hover:scale-105' src={item.url} />
                            <span onClick={() => handleDelete(item.public_id)} className='absolute top-0 right-0 bg-red-500 p-1 rounded-md'>X</span>
                        </div>
                    )
                }
            </div> */}
            <div className='flex mx-4 gap-4 my-4'>
                {form.images && form.images.length > 0 && form.images.map((item, index) => (
                    <div className='relative' key={index}>
                        <img className='w-24 h-24 hover:scale-105' src={item.url} />
                        <span onClick={() => handleDelete(item.public_id)} className='absolute top-0 right-0 bg-red-500 p-1 rounded-md'>X</span>
                    </div>
                ))}
            </div>


            {/* <div>
                <input
                    onChange={handleOnChange}
                    type='file'
                    name='images'
                    multiple
                />
            </div> */}
            <div className="flex flex-col">
                <label
                    htmlFor="file-upload"
                    className="bg-blue-500 text-white p-3 rounded-md shadow-md hover:scale-105 hover:-translate-y-1 hover:duration-200 max-w-[100px] w-full text-center"
                >
                    เพิ่มรูปภาพ
                </label>
                <input
                    id="file-upload"
                    onChange={handleOnChange}
                    type="file"
                    name="images"
                    multiple
                    className="hidden" // ซ่อน input
                />
            </div>

        </div>
    )
}

export default Uploadfile
