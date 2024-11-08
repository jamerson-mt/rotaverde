export function adjusteUrlFiles(url: string,type: string) {

  switch (type) {
    case 'image':
      // Substitua /app/UploadedFiles por /images
      if (url && url.includes("/app/wwwroot")) {
        url = url.replace("/app/wwwroot", "/");
      } else if (
        url &&
        url.includes(
          "/home/double/Repo/CapacitaDigital/CapacitaDigitalApi/wwwroot/"
        )
      ) {
        url = url.replace(
          "/home/double/Repo/CapacitaDigital/CapacitaDigitalApi/wwwroot/images",
          "/images"
        );
      } else if (url && url.includes("/images/images/")) {
        url = url.replace("/images/images/", "/images");
      }
      if (url && url.includes("/app/wwwroot")) {
        url = url.replace("/app/wwwroot", "/");
      } else if (
        url &&
        url.includes(
          "/home/double/Repo/CapacitaDigital/CapacitaDigitalApi/wwwroot/"
        )
      ) {
        url = url.replace(
          "/home/double/Repo/CapacitaDigital/CapacitaDigitalApi/wwwroot/images",
          "/images"
        );
      } else if (url && url.includes("/images/images/")) {
        url = url.replace("/images/images/", "/images");
      }
      break;
    case 'document':
        // Substitua /app/UploadedFiles por /files
        if (url && url.includes("/app/wwwroot")) {
          url = url.replace("/app/wwwroot", "/");
        } else if (
          url &&
          url.includes(
            "/home/double/Repo/CapacitaDigital/CapacitaDigitalApi/wwwroot/"
          )
        ) {
          url = url.replace(
            "/home/double/Repo/CapacitaDigital/CapacitaDigitalApi/wwwroot/files",
            "/files"
          );
        } else if (url && url.includes("/files/files/")) {
          url = url.replace("/files/files/", "/files");
        }
        break;
  }

  return url;
}

  
  