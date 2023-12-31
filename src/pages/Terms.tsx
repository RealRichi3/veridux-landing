import { Document, Page, pdfjs } from "react-pdf";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useState } from "react";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { Button } from "antd";

const Terms = () => {
    const [numPages, setNumPages] = useState<number | null>(null);
    const [pageNumber, setPageNumber] = useState<number>(1);

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
    };

    return (
        <div className="faqs">
            <Header />
            <div className="container" style={{ paddingTop: '40px', height: '100%', maxWidth: '800px', margin: '0 auto',  minHeight: '1500px'  }}>
                <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Terms and Condition</h1>
                <div style={{ overflowX: 'auto' }}>
                    <Document file={"/terms_and_condition.pdf"} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page pageNumber={pageNumber} />
                    </Document>
                </div>
                <p
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        margin: "10px",
                    }}
                >
                    Page {pageNumber} of {numPages || 1}
                </p>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                    }}
                >
                    <Button
                        style={{ width: "10rem", margin: "10px" }}
                        onClick={() => setPageNumber(pageNumber - 1)}
                        disabled={pageNumber <= 1}
                    >
                        Previous
                    </Button>
                    <Button
                        style={{ width: "10rem", margin: "10px" }}
                        onClick={() => setPageNumber(pageNumber + 1)}
                        disabled={pageNumber >= (numPages || 1)}
                    >
                        Next
                    </Button>
                </div>

            </div>

            <Footer />
        </div>
    );
};

export default Terms;