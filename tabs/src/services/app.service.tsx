import endpoints from "../data/endpoints";
const axios = require("axios");

export class AppService {
  public async getPullRequests() {
    const response = await fetch(endpoints.GET_PULL_REQUESTS, {
      method: "GET",
      headers: {
        vendor: "AzureDevops",
        assertionCode:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Im9PdmN6NU1fN3AtSGpJS2xGWHo5M3VfVjBabyJ9.eyJhdWkiOiI1ZjNkY2JjZi1iNDg0LTQ0NjMtOTg2OC00NmExOWQyMjBlNjUiLCJuYW1laWQiOiIwMzdlNjA0NS0xN2FkLTYwNTItOGJiZi1kYzNjMTExNmJlMjMiLCJzY3AiOiJ2c28uYW5hbHl0aWNzIHZzby5hdWRpdGxvZyB2c28uYXVkaXRzdHJlYW1zX21hbmFnZSB2c28uYnVpbGRfZXhlY3V0ZSB2c28uY29kZV9mdWxsIHZzby5jb25uZWN0ZWRfc2VydmVyIHZzby5kYXNoYm9hcmRzX21hbmFnZSB2c28uZW52aXJvbm1lbnRfbWFuYWdlIHZzby5ncmFwaF9tYW5hZ2UgdnNvLmlkZW50aXR5X21hbmFnZSB2c28ubG9hZHRlc3Rfd3JpdGUgdnNvLm1lbWJlcmVudGl0bGVtZW50bWFuYWdlbWVudF93cml0ZSB2c28ubm90aWZpY2F0aW9uX2RpYWdub3N0aWNzIHZzby5ub3RpZmljYXRpb25fd3JpdGUgdnNvLnBhY2thZ2luZ19tYW5hZ2UgdnNvLnByb2ZpbGVfd3JpdGUgdnNvLnByb2plY3RfbWFuYWdlIHZzby5yZWxlYXNlX21hbmFnZSB2c28uc2VjdXJlZmlsZXNfbWFuYWdlIHZzby5zZWN1cml0eV9tYW5hZ2UgdnNvLnNlcnZpY2VlbmRwb2ludF9tYW5hZ2UgdnNvLnN5bWJvbHNfbWFuYWdlIHZzby50YXNrZ3JvdXBzX21hbmFnZSB2c28udGhyZWFkc19mdWxsIHZzby50b2tlbmFkbWluaXN0cmF0aW9uIHZzby50b2tlbnMgdnNvLnZhcmlhYmxlZ3JvdXBzX21hbmFnZSB2c28ud2lraV93cml0ZSB2c28ud29ya193cml0ZSB2c28uYXV0aG9yaXphdGlvbl9ncmFudCIsImlzcyI6ImFwcC52c3Rva2VuLnZpc3VhbHN0dWRpby5jb20iLCJhdWQiOiJhcHAudnN0b2tlbi52aXN1YWxzdHVkaW8uY29tIiwibmJmIjoxNjY0NTQyNDc5LCJleHAiOjE2NjQ1NDMzNzl9.utfMicmthCZ-NKrvtF0QHdE-UNtC7lwjeh3OqVJVueLEkLKrQ18adDDLhkzeZwUm1XmKS8fxmDeUo0O8D5RrX9Io01-7WSbZKQ7uvSFxEJBEJwN5_iIJ6erGQhRkaHejqQi6b7CFC1orBq1wAlMCGVmd9AHGa_VWV9Iu5goVVXnxkSFWt9qdgX9rFdMStjua38p4vThT7Jj3v-ubSI1BnCaGhL-DS68DlWSRY_sOt4Ldac6bwgWTjxcL5UUoS8d3Rkcc_trflcQkmhFptkfcD3yO_foX4b6mcK5ackSUMxRJa5LyxVuSNmkVb46kiNGXNSO9ico5CtFfKP4CkHbOEw",
      },
    });

    //TODO: Show error on screen, return different response to paint an error message on the screen
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    return await response.json();
  }

  public async getComments(): Promise<any> {
    const response = await fetch(endpoints.GET_COMMENTS, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        vendor: "AzureDevops, GitHub",
        assertionCode: "",
      },
    });

    //TODO: Show error on screen, return different response to paint an error message on the screen
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    return await response.json();
  }

  //TODO: Create type Comment
  public async updateComment(comment: any) {
    const response = await fetch(endpoints.UPDATE_COMMENT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ comment }),
    });

    //TODO: Show error on screen, return different response to paint an error message on the screen
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    return await response.json();
  }

  //TODO: Create type Comment
  public async createComment(comment: any) {
    const response = await fetch(endpoints.CREATE_COMMENT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ comment }),
    });

    //TODO: Show error on screen, return different response to paint an error message on the screen
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    return await response.json();
  }
}
