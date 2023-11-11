'use client';
import Image from "next/image"
import { useBlogsQuery } from "@/redux/api/blogApi";
import { truncate } from "@/helpers/truncate";
import dayjs from 'dayjs';
const BlogAside = () => {
    const {data} = useBlogsQuery({})
    return (
        <div>
            <div className="mb-4">
                <h5 className="mb-3" style={{ fontWeight: '900' }}>SEARCH</h5>
                <div className="form-group has-search">
                    <i className="ri-search-line form-control-feedback"></i>
                    <input type="text" className="form-control" placeholder="Search" />
                </div>
            </div>
            <div className="mb-4">
                <h5 className="mb-3" style={{ fontWeight: '900' }}>CATEGORIES</h5>
                <ul className="px-0">
                    <li className="d-flex gap-2 align-items-center">
                        <i className="ri-arrow-drop-right-line" style={{ fontSize: '2rem' }}></i>
                        <span>Pc & Mac Repair</span>
                    </li>
                    <li className="d-flex gap-2 align-items-center">
                        <i className="ri-arrow-drop-right-line" style={{ fontSize: '2rem' }}></i>
                        <span>Pc & Mac Repair</span>
                    </li>
                    <li className="d-flex gap-2 align-items-center">
                        <i className="ri-arrow-drop-right-line" style={{ fontSize: '2rem' }}></i>
                        <span>Pc & Mac Repair</span>
                    </li>
                    <li className="d-flex gap-2 align-items-center">
                        <i className="ri-arrow-drop-right-line" style={{ fontSize: '2rem' }}></i>
                        <span>Pc & Mac Repair</span>
                    </li>
                    <li className="d-flex gap-2 align-items-center">
                        <i className="ri-arrow-drop-right-line" style={{ fontSize: '2rem' }}></i>
                        <span>Pc & Mac Repair</span>
                    </li>
                    <li className="d-flex gap-2 align-items-center">
                        <i className="ri-arrow-drop-right-line" style={{ fontSize: '2rem' }}></i>
                        <span>Pc & Mac Repair</span>
                    </li>
                </ul>
            </div>

            <div className="mb-4">
                <h5 className="mb-3" style={{ fontWeight: '900' }}>RECEN POSTS</h5>
                {data && data?.map((item:any) => (
                <div className="d-flex gap-2 align-items-center mb-2" key={item.id}>
                    {
                        item?.img && <div style={{ minHeight: '4rem', overflow: 'hidden' }}>
                        <Image src={item?.img} alt={item?.title} width={90} height={90} className="w-100 h-100 rounded image-hover object-fit-cover"/>
                    </div>
                    }
                    
                    <div className="p-2">
                        <h6 className="text-black text-start mb-1 text-primary"> {truncate(item?.title, 20)}</h6>
                        <div className="d-flex text-start gap-2">
                            <div className="d-flex gap-1 text-muted align-items-center justify-content-center">
                                <i className="ri-calendar-line"></i>
                                <span className="form-text">{dayjs(item?.createdAt).format('MMM D, YYYY hh:mm A')}</span>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>

            <div className="mb-4">
                <h5 className="mb-3" style={{ fontWeight: '900' }}>TAGS</h5>
                <div className="d-flex flex-wrap gap-3">
                    <button className="btn text-black px-3 py-1 btn-sm" style={{ background: '#cbcaca' }}>Repair</button>
                    <button className="btn text-black px-3 py-1 btn-sm" style={{ background: '#cbcaca' }}>Dissembing</button>
                    <button className="btn text-black px-3 py-1 btn-sm" style={{ background: '#cbcaca' }}>Installation</button>
                    <button className="btn text-black px-3 py-1 btn-sm" style={{ background: '#cbcaca' }}>SmartPhone</button>
                    <button className="btn text-black px-3 py-1 btn-sm" style={{ background: '#cbcaca' }}>Data Recovery</button>
                    <button className="btn text-black px-3 py-1 btn-sm" style={{ background: '#cbcaca' }}>Display</button>
                </div>
            </div>
        </div>
    )
}

export default BlogAside