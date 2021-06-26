import os
import shutil

extensions={
    "1.Images":("jpg","png"),
    "2.Documents":("pdf","docx"),
    "3.Others":()
}

def create_folder(file,file_type):
    current_path=os.getcwd()
    if os.path.exists(current_path+"\\"+file_type):
        shutil.move(file,current_path+"\\"+file_type)
    else:
        os.system("mkdir "+file_type)
        shutil.move(file,current_path+"\\"+file_type)



def categorise_file(file):
    global extensions
    type_of_file=list(extensions.keys())[-1]
    ext=file.split(".")[-1]
    for i in extensions.keys():
        if ext in extensions[i]:
            type_of_file=i
            break
    return type_of_file


def main():
    try:
        current_path=os.getcwd()
        for (path,dirname,filename) in os.walk(current_path):
            for file in filename:
                if file=="organiser.py":
                    pass
                else:
                    file_type=categorise_file(file)
                    create_folder(file,file_type)
            break
            
    except:
        print("There was an error")

if __name__=="__main__":
    main()